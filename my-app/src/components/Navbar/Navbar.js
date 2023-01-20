import React from "react";
import "./Navbar.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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
          Home
        </CustomLink>
        <CustomLink to="/database" className="custom-link">
          Database
        </CustomLink>
        <CustomLink to="/stats" className="custom-link">
          Stats
        </CustomLink>
        <CustomLink to="/login" className="custom-link">
          Admin Panel
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
