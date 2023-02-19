import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useParams, useNavigate } from "react-router-dom";
import userCreateDate from "../container/useCreateDate";

const EditNotes = ({ notes, setNotes }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const note = notes.find((item) => item.id === id);

  const [title, setTitle] = useState(note.title);
  const [desc, setDesc] = useState(note.desc);
  const date = userCreateDate();

  const handleNotesUpdate = (e) => {
    e.preventDefault();
    if (title && desc) {
      const newNote = { ...note, title, desc, date };
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    //redirect to home page
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const filterNotes = notes.filter((item) => item.id !== id);
      setNotes(filterNotes);
      //redirect to home page
      navigate("/");
    }
  };

  return (
    <>
      <section>
        <header className="create-note__header">
          <Link title="Go Back" to={"/"} className="btn">
            <IoIosArrowBack />
          </Link>
          <button className="btn lg primary" onClick={handleNotesUpdate}>
            Update
          </button>
          <button title="Delete" onClick={handleDelete} className="btn danger">
            <RiDeleteBin6Line />
          </button>
        </header>
        <form className="create-note__form" onSubmit={handleNotesUpdate}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            autoFocus
          />
          <textarea
            rows={30}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Note Details..."
          ></textarea>
        </form>
      </section>
    </>
  );
};

export default EditNotes;
