import express from "express";
import jwt from "jsonwebtoken";
const blogsRouter = express.Router();
import Blog from "../models/blog.js";
import User from "../models/user.js";
import middleware from "../utils/middleware.js";

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", ""); // keep only the token
  }
  return null;
};

blogsRouter.get("/", async (request, response) => {
  // const blogs = await Blog.find({});
  const blogs = await Blog.find({}).populate("user", {
    name: 1,
    username: 1,
  });
  response.json(blogs);
});

blogsRouter.post("/", middleware.tokenExtractor, async (request, response) => {
  // blogsRouter.post("/",  async (request, response) => {
  // console.log("🛠️", request.body);
  const body = request.body;

  // gets token & decode/verify it
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  // check if token has user id
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }

  const user = await User.findById(decodedToken.id);
  // const user = await User.findById(request.params.id);
  if (!user) {
    return response.status(400).json({ error: "user id missing or not valid" });
  }

  if (!body.title || !body.author || !body.url) {
    return response
      .status(400)
      .json({ error: "title, author, and url are required" });
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id, // link note to user
  });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();
  response.status(201).json(savedBlog);
});

blogsRouter.put("/:id/upvote", async (request, response) => {
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }

  const blog = await Blog.findById(request.params.id);
  if (!blog) {
    return response.status(404).json({ error: "blog not found" });
  }

  // Allow any authenticated user to like this blog
  blog.likes += 1;
  const updatedBlog = await blog.save();
  response.json(updatedBlog);
});

// Can be deleted only by the user who added it
blogsRouter.delete("/:id", async (request, response) => {
  try {
    const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET); // 👤
    if (!decodedToken.id) {
      return response.status(401).json({ error: "token invalid" });
    }

    // Find the blog by id 📝
    const blog = await Blog.findById(request.params.id);
    if (!blog) {
      return response.status(404).json({ error: "blog not found" });
    }

    // Check if blog's creator id matches decodedToken.id
    // The field blog.user does not contain a string, but an object
    if (blog.user.toString() !== decodedToken.id) {
      return response
        .status(403)
        .json({ error: "only the creator can delete the blog" });
    }

    await Blog.findByIdAndDelete(request.params.id);
    response.status(204).end();
  } catch (error) {
    console.error("DELETE error:", error.message);
    response.status(500).json({ error: "something went wrong" });
  }
});

export default blogsRouter;
