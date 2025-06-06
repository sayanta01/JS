import express from "express";
import mongoose from "mongoose";
import config from "./utils/config.js";
import logger from "./utils/logger.js";
import blogsRouter from "./controller/blogs.js"

const app = express();

mongoose.set("strictQuery", false);

logger.info("🔌 Connecting... to Database");
mongoose
  .connect(config.MONGODB_URI)
  .then(() => logger.info("🟢 Connected to MongoDB"))
  .catch((error) => logger.error("❌ Error connecting to MongoDB:", error.message),);

app.use(express.json());

app.use("/api/blogs", blogsRouter);

export default app;
