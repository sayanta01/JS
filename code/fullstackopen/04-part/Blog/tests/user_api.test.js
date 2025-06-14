import { test, after, beforeEach } from "node:test";
// import assert from "node:assert";
import mongoose from "mongoose";
import supertest from "supertest";
import app from "../app.js";

const api = supertest(app);

beforeEach(async () => {
  console.log("cleared");
});

test("check for invalid users", async () => {
  const duplicateUser = {
    name: "Sayanta",
    username: "bot",
    password: "pw", // catch this
  };
  await api
    .post("/api/users")
    .send(duplicateUser)
    .expect(400) // bad request
    .expect("Content-Type", /application\/json/);
});

after(async () => {
  await mongoose.connection.close();
});
