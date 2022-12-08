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
    tags: "Beef",
    ingredients: [],
  };
  const INITIALSUB = {
    name: "",
    quantity: "",
    measure: "l",
  };
  const [newRecipe, setNewRecipe] = useState(INITIAL);
  const [ingredientsList, setIngredientsList] = useState(INITIALSUB);

  const setRecipe = (event) => {
    setNewRecipe(
      (prev) => (prev = { ...prev, [event.target.name]: event.target.value })
    );
  };
  const setChangeIngredients = (e) => {
    setIngredientsList(
      (prev) =>
        (prev = {
          ...prev,
          [e.target.name]: e.target.value,
        })
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
      <form className="main-form">
        <h1>NEW RECIPE</h1>
        <input
          type="text"
          name="img"
          placeholder="image"
          value={newRecipe.img}
          onChange={setRecipe}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newRecipe.title}
          required
          onChange={setRecipe}
        />
        <input
          type="text"
          name="subtitle"
          placeholder="Subtitle"
          value={newRecipe.subtitle}
          onChange={setRecipe}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newRecipe.author}
          required
          onChange={setRecipe}
        />
        <textarea
          type="text"
          name="preparation"
          placeholder="Preparation"
          cols="30"
          rows="10"
          value={newRecipe.preparation}
          required
          onChange={setRecipe}
        />
        <h2>CATEGORY</h2>
        <select name="types" onChange={typeHandler}>
          <option value="Beef">Beef</option>
          <option value="Pork">Pork</option>
          <option value="Chicken">Chicken</option>
          <option value="FastFood">FastFood</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>
      </form>
      <h2>INGREDIENTS</h2>
      <form
        className="sub-form"
        onSubmit={(e) => {
          e.preventDefault();
          setNewRecipe(
            (prev) =>
              (prev = {
                ...prev,
                ingredients: [...prev.ingredients, ingredientsList],
              })
          );
          setIngredientsList(INITIALSUB);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Ingredients"
          value={ingredientsList.name}
          onChange={setChangeIngredients}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={ingredientsList.quantity}
          onChange={setChangeIngredients}
        />

        <select name="measure" onChange={setChangeIngredients}>
          <option name="measure" value="l">
            Liter
          </option>
          <option name="measure" value="g">
            Gramm
          </option>
          <option name="measure" value="pound">
            Pound
          </option>
          <option name="measure" value="ounce">
            Ounce
          </option>
          <option name="measure" value="cup">
            Cup
          </option>
          <option name="measure" value="kg">
            Kg
          </option>
          <option name="measure" value="pint">
            Pint
          </option>
          <option name="measure" value="teaspoon">
            Teaspoon
          </option>
          <option name="measure" value="tablespoon">
            Tablespoon
          </option>
          <option name="measure" value="item">
            Item
          </option>
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
