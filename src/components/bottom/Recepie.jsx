import useFetch from "../../custom/useFetch.jsx";
import connection from "../../connection.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CommentForm from "./CommentForm.jsx";
const Recepie = () => {
  const { id } = useParams();
  console.log(id);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [recepie, setRecepie] = useFetch(connection.URI, id);
  return (
    <>
      test
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
                {el.name}:{el.quantity} {el.type}
              </li>
            ))}
          </ul>
          <button onClick={() => setShowCommentForm((prev) => (prev = !prev))}>
            add comment
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
