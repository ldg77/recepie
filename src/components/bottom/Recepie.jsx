import useFetch from "../../custom/useFetch.jsx";
import connection from "../../connection.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Recepie = () => {
  const { id } = useParams();
  console.log(id);
  const [showCommentForm, setSchowCommentForm] = useState(false);
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
        </div>
      )}
    </>
  );
};

export default Recepie;
