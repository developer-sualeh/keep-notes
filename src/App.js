import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNotes from "./pages/CreateNotes";
import EditNotes from "./pages/EditNotes";
//import dummyNotes from "./dummy_notes";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("NotesList")) || []
  );
  console.log(notes);

  useEffect(() => {
    localStorage.setItem("NotesList", JSON.stringify(notes));
  }, [notes]);
  return (
    <>
      <main id="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home notes={notes} />} />
            <Route
              path="/create-notes"
              element={<CreateNotes setNotes={setNotes} />}
            />
            <Route
              path="/edit-notes/:id"
              element={<EditNotes notes={notes} setNotes={setNotes} />}
            />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
