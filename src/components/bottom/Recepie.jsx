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
          <ol>
            {recepie.data.ingredients.map((el) => (
              <li>
                {el.name}:{el.quantity} {el.measure}
              </li>
            ))}
          </ol>
          {recepie.data.comments.length > 0 && <h3>Comments</h3>}
          <ul>
            {recepie.data.comments &&
              recepie.data.comments.map((el) => (
                <>
                  <li>
                    {el.name}
                    {" : "}
                    {el.text}
                  </li>
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
