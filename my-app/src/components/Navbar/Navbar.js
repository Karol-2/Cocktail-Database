import {
  faChartBar,
  faDatabase,
  faHome,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <p>
        <Link to="/" className="custom-link">
          Cocktail Bar
        </Link>
      </p>
      <ul>
        <CustomLink to="/" className="custom-link">
          <FontAwesomeIcon icon={faHome} /> Home
        </CustomLink>
        <CustomLink to="/database" className="custom-link">
          <FontAwesomeIcon icon={faDatabase} /> Database
        </CustomLink>
        <CustomLink to="/stats" className="custom-link">
          <FontAwesomeIcon icon={faChartBar} /> Stats
        </CustomLink>
        <CustomLink to="/login" className="custom-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Admin Panel
        </CustomLink>
      </ul>
    </nav>
  );
};
export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
