import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Account</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
