import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import userCreateDate from "../container/useCreateDate";
import { v4 as uuid } from "uuid";

const CreateNotes = ({ setNotes }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const date = userCreateDate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && desc) {
      const inputNote = {
        id: uuid(),
        title,
        desc,
        date,
      };
      //add this note to the notes array
      setNotes((prevNotes) => [inputNote, ...prevNotes]);
      navigate("/");
    }
  };

  return (
    <>
      <section>
        <header className="create-note__header">
          <Link to={"/"} className="btn">
            <IoIosArrowBack />
          </Link>
          <button className="btn lg primary" onClick={handleSubmit}>
            Save
          </button>
        </header>
        <form className="create-note__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <textarea
            rows={30}
            placeholder="Note Details..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </form>
      </section>
    </>
  );
};

export default CreateNotes;
