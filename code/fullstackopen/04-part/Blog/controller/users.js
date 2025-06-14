import bcrypt from "bcrypt";
import express from "express";
const usersRouter = express.Router();
import User from "../models/user.js";

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs", {
    url: 1,
    title: 1,
    author: 1,
    id: 1,
  });
  response.json(users);
});

usersRouter.post("/", async (request, response, next) => {
  const { name, username, password } = request.body;

  if (!username || username.length < 2) {
    return response.status(400).json({
      error: "Username must be at least 2 characters long",
    });
  }

  // Password validation should done in Express
  // if (!password || password.length < 8) {
  //   return response.status(400).json({
  //     error: "Password must be at least 8 characters long",
  //   });
  // }

  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      name,
      username,
      passwordHash,
    });

    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});

usersRouter.delete("/:id", async (request, response) => {
  await User.findByIdAndDelete(request.params.id);
  response.send(204);
});

export default usersRouter;
