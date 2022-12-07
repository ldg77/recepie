
const tags = [
  "Beef", "Pork", "Chicken", "Vegan", "Vegetarian", "FastFood",
]

const Nav = ({ setTag }) => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="nav-btn">Home</div>
        <div className="nav-btn">Add Recipe</div>
        <div className="nav-dropdown">
          <select onChange={(event) => setTag(prev => prev=event.target.value)}>{tags.map((tag) => <option value={tag} key={tag}>{tag}</option>)}</select>
        </div>
      </div>
    </div>
  )
};

export default Nav;
