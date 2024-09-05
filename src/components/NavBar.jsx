import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Boardgames</NavLink>
      <NavLink to="/create">Add a Boardgame</NavLink>
    </nav>
  );
}
