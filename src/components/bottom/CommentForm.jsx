import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CommentForm = ({ id, setShowCommentForm }) => {
  const navigate = useNavigate();
  const INITIAL = {
    name: "",
    text: "",
  };
  const [formData, setFormData] = useState(INITIAL);
  const handleChange = (e) => {
    setFormData(
      (prev) => (prev = { ...prev, [e.target.name]: e.target.value })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://rezeptbackend.onrender.com/${id}/comment`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setShowCommentForm((prev) => (prev = false)));
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="commentForm">
        <input
          type="text"
          name="name"
          placeholder="your name"
          value={formData.name}
          onChange={handleChange}
        />
        <textarea
          name="text"
          cols="30"
          rows="10"
          placeholder="your comment"
          value={formData.text}
          onChange={handleChange}
        />
        <button>save comment</button>
      </form>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back
      </button>
    </>
  );
};

export default CommentForm;
