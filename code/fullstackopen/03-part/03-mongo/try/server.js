import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import Note from "./models/note";
const app = express();

// Middleware
app.use(express.static("dist"));
app.use(cors());
// json-parser is listed before requestLogger, because otherwise request.body will not be initialized when the logger is executed!
app.use(express.json());
app.use(morgan("tiny"));

// MongoDB connection
const password = process.argv[2];
const url = `mongodb+srv://sayanta:${password}@cluster0.kkvr7dj.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Mongoose schema & model
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

noteSchema.set("toJSON", {
  // When you convert this data to JSON, use this special rule
  // Custom function that runs automatically when Mongoose is converting the document into JSON
  transform: (document, returnedObject) => {
    // document: original Mongoose object
    // returnedObject: plain JS object to modify

    // Copies _id (an object) to id as a string
    returnedObject.id = returnedObject._id.toString();
    // Removes the original _id field
    delete returnedObject._id;
    // Removes the Mongo versioning field __v
    delete returnedObject.__v;
  },
});

const Note = mongoose.model("Note", noteSchema);

let notes = [
  {
    id: "1",
    content: "HTML is easy & Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "2",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

// Routes
// app.get("/", (req, res) => {
//   res.send("API is Running...");
// });

app.get("/api/notes", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
    // res.send("<h1>Hello World!</h1>");
  });
});

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id; // 💡
  const note = notes.find((note) => note.id === id);
  // console.log(req.params); // request object that contains route parameters

  if (note) {
    res.json(note);
  } else {
    res.status(404).end("4O4"); // ends the response with no body
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  notes = notes.filter((note) => note.id !== id); // keep notes that didn't match with the `id`
  res.status(204).end();
});

const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0;

  return String(maxId + 1);
};

app.post("/api/notes", (req, res) => {
  // console.log(req.headers); // print all headers from the request

  const body = req.body;

  if (!body.content) {
    // return is important - it stops the code right here
    return res.status(400).json({ error: "content missing" });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  };

  notes = notes.concat(note);
  res.json(note);
  // console.log(note);
});

// The process is global object that provides information about the current Node.js process
const port = process.env.PORT || 3001; // PORT that Render tells your app to use & fallback
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
