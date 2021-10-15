import { Link } from "react-router-dom";
import cla from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={cla.header}>
      <div className={cla.logo}>React Meetups App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorite">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
