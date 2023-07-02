import {
  faChartBar,
  faDatabase,
  faHome,
  faSignInAlt,
  faUnlockAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.scss";
import { useKeycloak } from "@react-keycloak/web";

const Navbar = () => {
  const { keycloak, initialized } = useKeycloak();

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
        
        { keycloak.authenticated && keycloak.hasRealmRole("admin") &&(
               <li>
                 <a  href="/admin" className="custom-link">
                 <FontAwesomeIcon icon={faUnlockAlt} />
                   Admin Page
                 </a>
               </li> )}
               <li>
               <div>
                 {!keycloak.authenticated && (
                   <button
                     className="login"
                     type="button"
                     onClick={() => keycloak.login()}
                   > <FontAwesomeIcon icon={faSignInAlt} />
                      Login
                   </button>
                 )}

                 {!!keycloak.authenticated && (
                   <button
                     className="login"
                     type="button"
                     onClick={() => keycloak.logout()}
                   > <FontAwesomeIcon icon={faSignInAlt} />
                      ({keycloak.tokenParsed.preferred_username}) Logout 
                   </button>
                 )}
                 
             </div>
               </li>
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
