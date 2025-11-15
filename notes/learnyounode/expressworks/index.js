import express from "express";
import fs from "fs/promises"; // Modern filesystem Api
import path from "path";
import { fileURLToPath } from "url";

const app = express(); // Object
const port = process.argv[2] || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
// app.use(express.static(path.join(__dirname, "public"))); // __dirname == pwd

// Middleware
app.use(express.json()); // body-parser: Converts raw JSON to JS object in req.body
app.use(express.urlencoded({ extended: true })); // Parses Form data into req.body

// Template engine
// app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render("index", { title: "ejs", date: new Date().toDateString() });
});

// Form
// Why do we use POST instead of GET for forms?
app.get("/form", (req, res) => {
  res.send(`
  <h1>The form element</h1>
  <form action="/submit" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
  </form>
  `);
});

app.post("/submit", (req, res) => {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  // One response per request
  res.send(`You submitted: ${firstName} ${lastName}`);
  res.redirect("/");
});

// Dynamic routes
app.get("/profile/:username", (req, res) => {
  console.log(req.body);
  res.send(`welcome ${req.params.username}`);
});

// Extract the value from the URL
app.get("/msg/:id", (req, res) => {
  const paramValue = req.params.id;
  res.send(paramValue);
});

// Extract data from the query string
app.get("/search", (req, res) => {
  const searchTerm = req.query.name;
  res.send(searchTerm);
});

// JSON ME
// app.get("/book", (req, res) => {
//   fs.readFile("./express.md", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       res.json(data);
//     }
//   });
// });

// Promise way
app.get("/book", async (req, res, next) => {
  try {
    const data = await fs.readFile("./express.md", "utf8");
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Keep error-related middleware at the END

// Unknown endpoint
app.use(/.*/, (req, res) => {
  // Avoid bare * wildcard
  res.status(404).send("404 Page Not Found");
});

// Error handling
// app.get("/error", (req, res, next) => {
//   fs.readFile("/file-does-not-exist", (err, data) => {
//     if (err) {
//       next(err); // Pass errors to Express
//     } else {
//       res.send(data);
//     }
//   });
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Listing on port ${port}`);
});
