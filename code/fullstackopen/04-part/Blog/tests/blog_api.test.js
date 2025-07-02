import { test, after, beforeEach } from "node:test";
import assert from "node:assert";
import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app.js";

const api = supertest(app);

beforeEach(async () => {
  console.log("cleared");
});

// test("blogs are returned as json", async () => {
//   await api
//     .get("/api/blogs")
//     .expect(200)
//     .expect("Content-Type", /application\/json/);
// });

test("a valid blog can be added", async () => {
  const newBlog = {
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
  };

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvdCIsImlkIjoiNjg0YjM5YzFjMjJhN2FhYjRmOTExNTdmIiwiaWF0IjoxNzQ5OTI0OTU1fQ.sjIuq5x7OEV1cxAtoOe1ip6IU0FYKVYfaFtYT4dF8YU`;
  const response = await api
    .post("/api/blogs")
    .set("Authorization", `Bearer ${token}`)
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const blogsAtEnd = await api.get("/api/blogs");
  assert.ok(blogsAtEnd.body.length >= 1);
  assert.strictEqual(response.body.likes, 0);
});

// test("blog without a url is rejected with status 400 ", async () => {})
// write a new test to ensure adding a blog fails with the proper status code 401 Unauthorized if a token is not provided

after(async () => {
  await mongoose.connection.close();
});
