import React from "react";
import useFetch from "../../custom/useFetch.jsx";
import connection from "../../connection.json";
const Recepies = () => {
  const [recepies, setRecepies] = useFetch(connection.URL);
  return <div className="recepies"></div>;
};

export default Recepies;
