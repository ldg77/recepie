import { useState } from "react";
import connection from "../../connection.json";

const CommentForm = ({ id, setShowCommentForm }) => {
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
    fetch(`${connection.URI}/${id}/comment`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setShowCommentForm((prev) => (prev = false)));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default CommentForm;
