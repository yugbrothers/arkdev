import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { prisma } from "./lib/prisma";
import { hashPassword, comparePassword } from "./auth/hash";
import { createToken } from "./auth/jwt";
import { authMiddleware } from "./middleware/auth";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    name: "ArkDev API",
    status: "running"
  });
});

app.get(
  "/me",
  authMiddleware,
  async (req, res) => {
    res.json({
      user: (req as any).user
    });
  }
);

app.post("/auth/register", async (req, res) => {
  const { email, password, name } = req.body;

  const existing = await prisma.user.findUnique({
    where: { email }
  });

  if (existing) {
    return res.status(400).json({
      error: "User already exists"
    });
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name
    }
  });

  res.json({
    id: user.id,
    email: user.email,
    name: user.name
  });
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    return res.status(401).json({
      error: "Invalid credentials"
    });
  }

  const valid = await comparePassword(
    password,
    user.password
  );

  if (!valid) {
    return res.status(401).json({
      error: "Invalid credentials"
    });
  }

  const token = createToken(user.id);

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  });
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(
    `ArkDev API running on http://localhost:${PORT}`
  );
});

app.get(
  "/projects",
  authMiddleware,
  async (req, res) => {
    const userId = (req as any).user.userId;

    const projects =
      await prisma.project.findMany({
        where: {
          ownerId: userId,
        }
      });

    res.json(projects);
  }
);

app.post(
  "/projects",
  authMiddleware,
  async (req, res) => {
    const userId = (req as any).user.userId;

    const { name, description, workspaceId } = req.body;

    const project =
      await prisma.project.create({
        data: {
          name,
          description,
          ownerId: userId,
          workspaceId
        }
      });

    res.json(project);
  }
);

app.get(
  "/tasks/:projectId",
  authMiddleware,
  async (req, res) => {

    const tasks =
      await prisma.task.findMany({
        where: {
          projectId: String(req.params.projectId)
        }
      });

    res.json(tasks);
  }
);

app.post(
  "/tasks",
  authMiddleware,
  async (req, res) => {

    const {
      title,
      projectId
    } = req.body;

    const task =
      await prisma.task.create({
        data: {
          title,
          projectId
        }
      });

    res.json(task);
  }
);

app.patch(
  "/tasks/:id",
  authMiddleware,
  async (req, res) => {

    const task =
      await prisma.task.update({
        where: {
          id: String(req.params.id)
        },
        data: req.body
      });

    res.json(task);
  }
);

app.patch(
  "/tasks/:taskId",
  authMiddleware,
  async (req, res) => {
    const { taskId } = req.params;
    const { status } = req.body;

    const task = await prisma.task.update({
      where: {
        id: String(taskId)
      },
      data: {
        status
      }
    });

    res.json(task);
  }
);

app.post(
  "/workspaces",
  authMiddleware,
  async (req, res) => {

    const { name } = req.body;

    const workspace =
      await prisma.workspace.create({
        data: {
          name,
          ownerId: (req as any).user.userId
        }
      });

    res.json(workspace);
  }
);

app.get(
  "/workspaces",
  authMiddleware,
  async (req, res) => {

    const workspaces =
      await prisma.workspace.findMany({
        where: {
          ownerId: (req as any).user.userId
        }
      });

    res.json(workspaces);
  }
);

app.post(
  "/ai/project",
  authMiddleware,
  async (req, res) => {

    const { idea } = req.body;

    const tasks = [
      `Setup project for ${idea}`,
      `Create database schema`,
      `Implement authentication`,
      `Build dashboard UI`,
      `Deploy application`
    ];

    res.json({
      project: idea,
      tasks
    });
  }
);
