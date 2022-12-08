import useFetch from "../../custom/useFetch.jsx";
import connection from "../../connection.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CommentForm from "./CommentForm.jsx";
const Recepie = () => {
  const { id } = useParams();
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [recepie, setRecepie] = useFetch(connection.URI, id, showCommentForm);
  return (
    <>
      {!recepie.isPending && (
        <div className="recepieDetail">
          <img src={recepie.data.img} />
          <h1>{recepie.data.title}</h1>
          <h3>{recepie.data.subtitle}</h3>
          <p>{recepie.data.author}</p>
          <p>{recepie.data.preparation}</p>
          <ul>
            {recepie.data.ingredients.map((el) => (
              <li>
                {el.name}:{el.quantity} {el.measure}
              </li>
            ))}
          </ul>
          <ul>
            {recepie.data.comments &&
              recepie.data.comments.map((el) => (
                <>
                  <li>{el.name}</li> <li>{el.text}</li>
                </>
              ))}
          </ul>
          <button onClick={() => setShowCommentForm((prev) => (prev = !prev))}>
            {!showCommentForm ? "open comment form" : "close comment form"}
          </button>
        </div>
      )}
      {showCommentForm && (
        <CommentForm id={id} setShowCommentForm={setShowCommentForm} />
      )}
    </>
  );
};

export default Recepie;
