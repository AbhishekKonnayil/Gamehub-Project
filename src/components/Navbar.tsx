import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];
  return (
    <div className="d-flex w-100 justify-content-between align-items-center">
      <img src="" alt="" />
      <ul className="d-flex gap-5 list-unstyled nav">
        {navlinks.map((navlink) => {
          return (
            <li className="">
              <NavLink
                to={navlink.route}
                className={({ isActive }) =>
                  `text-decoration-none text-reset ${
                    isActive ? "active fw-bold" : ""
                  }`
                }
              >
                {navlink.name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <button>Get started</button>
    </div>
  );
};

export default Navbar;
