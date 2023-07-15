import React from "react";
import style from "@/assets/nav.module.css";
import { NavLink } from "react-router-dom";
import "@/assets/style.css";

export default function Navbar() {
  const navroute = {
    Home: "/",
    Blog: "/blog",
    Project: "/project",
    About: "/about",
  };

  return (
    <nav className={style.navbar}>
      <label>Lanie</label>
      <ul>
        {Object.keys(navroute).map(route => (
          <li key={route}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : style.link
              }
              to={navroute[route]}
            >
              {({ isActive }) => route + (isActive ? " <": "")}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
