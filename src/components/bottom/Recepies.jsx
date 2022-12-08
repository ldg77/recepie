import React from "react";
import useFetch from "../../custom/useFetch.jsx";
import connection from "../../connection.json";
import { useNavigate } from "react-router-dom";
const Recepies = ({ tag }) => {
  const [recepies, setRecepies] = useFetch(
    !tag.length
      ? "https://rezeptbackend.onrender.com"
      : `https://rezeptbackend.onrender.com/tags/${tag}`
  );
  const navigator = useNavigate();

  return (
    <div className="recepies">
      {!recepies.isPending &&
        recepies.data.map((el) => (
          <div className="recepie">
            <img src={el.img} alt="recepieImg" />
            <h3>{el.title}</h3>
            <p>{el.tags}</p>
            <button
              onClick={() => {
                navigator("/" + el._id);
              }}
            >
              show recipe
            </button>
          </div>
        ))}
    </div>
  );
};

export default Recepies;
