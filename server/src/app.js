// definition
import express from "express";
import cors from "cors";
import imagesRoute from "./routes/route.images.js";
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/images", imagesRoute);

app.get("/", (_, res) => {
  res.send("server running....");
});

app.get("/health", (_, res) => {
  res.send({ status: 200, message: "Server health Ok!" });
});

export default app;
