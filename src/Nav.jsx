import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/search">Search Recipes</NavLink>
      </li>
      <li>
        <NavLink to="/recipes"></NavLink>
      </li>
    </ul>
  );
}

export default Nav;
