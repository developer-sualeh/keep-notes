import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import NoteItem from "../container/NoteItem";
const Home = ({ notes, setNotes }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [filterNotes, setFilterNotes] = useState(notes);

  const handleSearch = () => {
    setFilterNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(query.toLowerCase())) {
          return note;
        }
      })
    );
  };

  const deleteAllHandler = () => {
    if (window.confirm("Are you sure You want to delete All Notes? ")) {
      localStorage.clear("NotesList");
      window.location.reload(true);
    }
  };

  useEffect(handleSearch, [query]);

  return (
    <>
      <section>
        <header className="notes__header">
          <div className="left">
            {!showSearch && <h2>My Notes</h2>}
            {showSearch && (
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  handleSearch();
                }}
                autoFocus
                placeholder="Keyword..."
              />
            )}
          </div>
          <div className="right">
            <button
              title="Search here"
              className="btn"
              onClick={() => setShowSearch((prevState) => !prevState)}
            >
              {showSearch ? <MdClose /> : <CiSearch />}
            </button>
            &nbsp;
            {filterNotes.length >= 1 && (
              <button
                title="Clear All"
                className="btn danger"
                onClick={deleteAllHandler}
              >
                <VscClearAll />
              </button>
            )}
          </div>
        </header>
        <div className="notes__container">
          {filterNotes.length === 0 && (
            <p className="empty__notes">No Notes Found</p>
          )}
          {filterNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
        <Link title="Create Note" to={"/create-notes"} className="btn add__btn">
          <BsPlusLg />
        </Link>
      </section>
    </>
  );
};

export default Home;
