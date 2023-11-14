import { Link } from "react-router-dom";
import "./styles.css";

function Navigation({}) {
  return (
    <nav className="nav">
      <Link className="nav__link" to={"/"}>
        HomePage
      </Link>
      <Link className="nav__link" to={"/about"}>
        AboutPage
      </Link>
      <Link className="nav__link" to={"/settings"}>
        SettingsPage
      </Link>
    </nav>
  );
}

export default Navigation;
