import React from "react";
import { useState } from "react";
import connection from "../../connection.json";
import "./Form.scss";

const Form = () => {
  const INITIAL = {
    img: "",
    title: "",
    subtitle: "",
    author: "",
    preparation: "",
    ingredients: [],
    tags: "Beef",
  };
  const [newRecipe, setNewRecipe] = useState(INITIAL);

  const setRecipe = (event) => {
    setNewRecipe(
      (prev) => (prev = { ...prev, [event.target.name]: event.target.value })
    );
  };

  const typeHandler = (e) => {
    setNewRecipe((prev) => (prev = { ...prev, tags: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(connection.URI, {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setNewRecipe(INITIAL));
  };

  return (
    <div>
      <form className='main-form' >

      <h1>NEW RECIPE</h1>
        <input type="text" name="img" placeholder="image" value={newRecipe.img}  onChange={setRecipe}/>
        <input type="text" name="title" placeholder="Title" value={newRecipe.title} required onChange={setRecipe}/>
        <input type="text" name="subtitle" placeholder="Subtitle" value={newRecipe.subtitle} onChange={setRecipe}/>
        <input type="text" name="author" placeholder="Author" value={newRecipe.author} required onChange={setRecipe}/>
        <textarea type="text" name="preparation" placeholder="Preparation" cols="30" rows="10" value={newRecipe.preparation} required onChange={setRecipe}/>
        <h2>Tags</h2>
        <select name="types" onChange={typeHandler}>
          <option value="Beef">Beef</option>
          <option value="Pork">Pork</option>
          <option value="Chicken">Chicken</option>
          <option value="FastFood">FastFood</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>
      </form>
      <h2>Ingredients</h2>
      <form
        className="sub-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
          setNewRecipe(
            (prev) =>
              (prev = {
                ...prev,
                ingredients: [
                  ...prev.ingredients,
                  {
                    name: e.target[0].value,
                    quantity: e.target[1].value,
                    type: e.target[2].value,
                  },
                ],
              })
          );
          e.target[0].value = "";
          e.target[1].value = "";
        }}
      >
        <input type="text" name="ingredients" placeholder="Ingredients"  />
        <input type="number" name="quantitiy" placeholder="Quantity"  />
        <select name="types">
          <option value="l">Liter</option>
          <option value="g">Gramm</option>
          <option value="cup">Cup</option>
        </select>
        <button>Save ingredient</button>
      </form>
      <button type="submit" onClick={submitHandler}>
        Save recipe
      </button>
    </div>
  );
};

export default Form;
