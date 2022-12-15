import React from "react";
import "./Navbar.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <p>
        <Link to="/">Cool Logo</Link>
      </p>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/database">Database</CustomLink>
        <CustomLink to="/stats">Stats</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
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
