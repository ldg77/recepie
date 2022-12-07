import React from "react";
import useFetch from "../../custom/useFetch.jsx";
import connection from "../../connection.json";

import { useNavigate } from "react-router-dom";
const Recepies = () => {
  const [recepies, setRecepies] = useFetch(connection.URL);
  const navigator = useNavigate();

  return (
    <div className="recepies">
      {recepies.data.map((el) => (
        <div className="recepie">
          <img src={el.img} alt="recepieImg" />
          <h3>{el.title}</h3>
          <p>{el.tags.slice(0, 3)}...</p>
          <button
            onClick={() => {
              navigator(el._id);
            }}
          >
            ShowReciepe
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recepies;
