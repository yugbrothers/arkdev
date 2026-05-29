import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const JWT_SECRET =
  process.env.JWT_SECRET || "arkdev_secret";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  try {
    const token = header.replace(
      "Bearer ",
      ""
    );

    const decoded = jwt.verify(
      token,
      JWT_SECRET
    );

    (req as any).user = decoded;

    next();
  } catch {
    return res.status(401).json({
      error: "Invalid Token"
    });
  }
}
