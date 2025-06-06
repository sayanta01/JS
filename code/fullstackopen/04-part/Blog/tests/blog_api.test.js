import { test, after, beforeEach } from "node:test";
import assert from "node:assert";
import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app.js";
// import Blog from "../models/blog.js";

const api = supertest(app);

beforeEach(async () => {
  console.log("cleared");
});

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

// test("a valid blog can be added", async () => {
//   const newBlog = {
//     title: "React patterns",
//     author: "Michael Chan",
//     url: "https://reactpatterns.com/",
//   };
//
//   const response = await api
//     .post("/api/blogs")
//     .send(newBlog)
//     .expect(201)
//     .expect("Content-Type", /application\/json/);
//
//   const blogsAtEnd = await api.get("/api/blogs");
//   assert.ok(blogsAtEnd.body.length >= 1);
//   assert.strictEqual(response.body.likes, 0);
// });

test("blog without a url is rejected with status 400 ", async () => {});

after(async () => {
  await mongoose.connection.close();
});
