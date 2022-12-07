import React from "react";
import { useState } from "react";
import connection from "../../connection.json";
const Form = () => {
  const INITIAL = {
    img: "",
    title: "",
    subtitle: "",
    author: "",
    preparation: "",
    ingredients: [],
    quantity: "",
    tags: "",
  };
  const [newRecipe, setNewRecipe] = useState(INITIAL);

  const setRecipe = (event) => {
    setNewRecipe(
      (prev) => (prev = { ...prev, [event.target.name]: event.target.value })
    );
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
      .then((json) => console.log(json));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
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
          onChange={setRecipe}
        />
        <input
          type="text"
          name="subtitle"
          placeholder="Subtitle"
          onChange={setRecipe}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={setRecipe}
        />
        <input
          type="text"
          name="preparation"
          placeholder="Preparation"
          onChange={setRecipe}
        />

        <form
          className="sub-form"
          onSubmit={(e) => {
            e.preventDefault();
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
          }}
        >
          <input type="text" name="ingredients" placeholder="Ingredients" />
          <input type="number" name="quantitiy" placeholder="Quantity" />
          <select name="types">
            <option value="l">Liter</option>
            <option value="g">Gramm</option>
            <option value="cup">Cup</option>
          </select>
          <button>Save ingredient</button>
        </form>

        <input
          type="text"
          name="tags"
          placeholder="Tags"
          onChange={setRecipe}
        />
        <button>Save recipe</button>
      </form>
    </div>
  );
};

export default Form;
