import { useState } from "react";
import Note from "./components/Note";

const App = ({ notes }) => {
  const [note, setNotes] = useState(notes);
  const [newNote, setNewNote] = useState("a new note..."); // this state reflects the current value of the input
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    // console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(note.length + 1),
    };

    setNotes(note.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value); // refers to the input value of that element
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        {/* controlled input element */}
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
