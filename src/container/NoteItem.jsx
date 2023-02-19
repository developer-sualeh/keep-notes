import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <>
      <Link to={`edit-notes/${note.id}`} className="note">
        <h4>
          {note.title.length > 15
            ? note.title.substr(0, 15) + "..."
            : note.title}
        </h4>
        <p>
          {note.desc.length > 15 ? note.desc.substr(0, 15) + "..." : note.desc}
        </p>
        <p>{note.date}</p>
      </Link>
    </>
  );
};

export default NoteItem;
