import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({
    app: "ArkDev",
    status: "running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ArkDev API running on ${PORT}`);
});
