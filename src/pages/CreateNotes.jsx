import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || desc === "") {
      return alert("Title and description Field are required");
    } else {
      console.log(title, desc);
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
