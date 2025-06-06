import express from "express";
const blogsRouter = express.Router();
import Blog from "../models/blog.js";

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogsRouter.post("/", (request, response) => {
  console.log("🛠️", request.body);

  const blog = new Blog(request.body);
  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

blogsRouter.put("/:id/upvote", async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  blog.likes += 1;
  const updatedBlog = await blog.save();
  response.json(updatedBlog);
});

blogsRouter.delete("/:id", async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

export default blogsRouter;
