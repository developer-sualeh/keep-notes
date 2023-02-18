import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNotes from "./pages/CreateNotes";
import EditNotes from "./pages/EditNotes";
function App() {
  return (
    <>
      <main id="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-notes" element={<CreateNotes />} />
            <Route path="/edit-notes/:id" element={<EditNotes />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
