<<<<<<< HEAD
import './Nav.scss';
import { useNavigate } from 'react-router-dom';

const tags = [
  "", "Beef", "Pork", "Chicken", "Vegan", "Vegetarian", "FastFood",
];
=======
import "./Nav.scss";
import { useNavigate } from "react-router-dom";
>>>>>>> b4508b1d40f9b0b9f9620c8cd6682555c8589805

const tags = ["", "Beef", "Pork", "Chicken", "Vegan", "Vegetarian", "FastFood"];

const Nav = ({ setTag }) => {
  const navigator = useNavigate();

  return (
    <div>
      <div className="navbar">
        <img src="" alt="Logo" className="logo" />
        <button
          className="nav-btn"
          onClick={() => {
            navigator("/");
          }}
        >
          Home
        </button>
        <button
          className="nav-btn"
          onClick={() => {
            navigator("/form");
          }}
        >
          Add Recipe
        </button>
        <div className="nav-dropdown">
<<<<<<< HEAD
          <label
            className="navbar-label"htmlFor="select">Select Ingredients 
          </label>
          <select
            id="select "onChange={(event) => setTag(prev => prev=event.target.value)}>
            {tags.map((tag) =>      <option 
              value={tag} key={tag}>{tag}
            </option>)}
=======
          <label className="navbar-label" htmlFor="select">
            Select Ingredients{" "}
          </label>
          <select
            id="select "
            onChange={(event) => setTag((prev) => (prev = event.target.value))}
          >
            {tags.map((tag) => (
              <option value={tag} key={tag}>
                {tag}
              </option>
            ))}
>>>>>>> b4508b1d40f9b0b9f9620c8cd6682555c8589805
          </select>
        </div>
      </div>
    </div>
  );
};

export default Nav;
