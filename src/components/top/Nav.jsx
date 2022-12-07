import './nav.scss';
import { useNavigate } from 'react-router-dom';

const tags = [
  "", "Beef", "Pork", "Chicken", "Vegan", "Vegetarian", "FastFood",
];


const Nav = ({ setTag }) => {
  
  const navigator = useNavigate();

  return (
    
    <div>
      <div className="navbar">
        <img src="" alt="Logo" className="logo"/>
        <button className="nav-btn" onClick={() => {
          navigator("/")
        }}>Home</button>
        <button className="nav-btn" onClick={() => {
          navigator("/form")
        }}>Add Recipe</button>
        <div className="nav-dropdown">
          <label className="navbar-label" htmlFor="select">Select Ingredients </label>
          <select id="select "onChange={(event) => setTag(prev => prev=event.target.value)}>
            {tags.map((tag) => <option value={tag} key={tag}>{tag}</option>)}
          
          </select>
        </div>
      </div>
    </div>
  )
};

export default Nav;
