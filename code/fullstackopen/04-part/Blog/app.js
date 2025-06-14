import express from "express";
import mongoose from "mongoose";
import config from "./utils/config.js";
import logger from "./utils/logger.js";
import middleware from "./utils/middleware.js";
import blogsRouter from "./controller/blogs.js"
import usersRouter from "./controller/users.js"
import loginRouter from "./controller/login.js"

const app = express();

mongoose.set("strictQuery", false);

logger.info("🔌 Connecting... to Database");
mongoose
  .connect(config.MONGODB_URI)
  .then(() => logger.info("🟢 Connected to MongoDB"))
  .catch((error) => logger.error("❌ Error connecting to MongoDB:", error.message),);

app.use(express.json());

app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
