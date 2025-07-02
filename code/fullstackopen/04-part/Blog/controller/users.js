import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
const usersRouter = express.Router();
import User from "../models/user.js";

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", ""); // keep only the token
  }
  return null;
};

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

  // if (!username || username.length < 2) {
  //   return response.status(400).json({
  //     error: "Username must be at least 2 characters long",
  //   });
  // }

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
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET); // 👤
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }

  const user = await User.findById(request.params.id);
  if (!user) {
    return response.status(404).json({ error: "user not found" });
  }

  if (user.id !== decodedToken.id) {
    return response
      .status(403)
      .json({ error: "only the owner can delete the account" });
  }

  await User.findByIdAndDelete(request.params.id);
  response.send(204).end;
});

export default usersRouter;
