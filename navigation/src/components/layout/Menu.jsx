import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/param/123">Param</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
