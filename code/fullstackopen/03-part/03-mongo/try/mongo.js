import mongoose from "mongoose";

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://sayanta:${password}@cluster0.kkvr7dj.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

// Strictly enforce queries, only fields defined in the schema are allowed in queries
mongoose.set("strictQuery", false);
mongoose.connect(url);

// After establishing the connection to the database, we define the schema for a note and the matching model
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// Create a new note object with the help of the Note model:💡
// const note = new Note({
//   content: "Mongoose makes things easy",
//   important: true,
// });

// Saving the object to the database, which can be provided with an event handler
// note.save().then((result) => {
//   console.log(`Note 🗒️ saved! at ${result}`);
//   mongoose.connection.close();
// });

// Fetching objects from the database
// The parameter of the method is an object expressing search conditions
Note.find({ important: true }).then((result) => {
  console.log(result);
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
