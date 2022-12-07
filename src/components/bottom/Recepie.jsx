import React from "react";
import useFetch from "../../custom/useFetch.jsx";
import connection from "../../connection.json";
const Recepie = () => {
  const [showCommentForm, setSchowCommentForm] = useState(false);
  const [recepie, setRecepie] = useFetch();
  return (
    <div className="recepieDetail">
      <img src={recepie.data.img} />
      <h1>{recepie.data.title}</h1>
      <h3>{recepie.data.subtitle}</h3>
    </div>
  );
};

export default Recepie;
