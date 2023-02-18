import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import notes from "../dummy_notes";
import { Link } from "react-router-dom";
import NoteItem from "../container/NoteItem";
const Home = () => {
  return (
    <>
      <section>
        <header className="notes__header">
          <h2>My Notes</h2>
          <input type="text" autoFocus placeholder="Keyword..." />
          <button>
            <CiSearch />
          </button>
        </header>
        <div className="notes__container">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
        <Link className="btn add__btn">
          <BsPlusLg />
        </Link>
      </section>
    </>
  );
};

export default Home;
