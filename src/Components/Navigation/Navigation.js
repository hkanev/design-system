import React from "react";
import NavLink from "Components/Navigation/NavLink";
import "./Navigation.scss";
import Submenu from "./submenu";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";

const Navigation = ({ mainNav, UserNavigation, className }) => {
  return (
    <nav className={`navigation ${className ? className: ''}`}>
      <div className="nav-header">
          <FaBars size="1.5rem" className="nav-hamburger"/>
          <Logo/>
      </div>

      {mainNav.map((item) =>
        item.subitems.length ? (
          <Submenu item={item}></Submenu>
        ) : (
          <NavLink to={item.route} end className={item.class}>
            {item.icon }
            {item.label}
          </NavLink>
        )
      )}

      {UserNavigation && <UserNavigation></UserNavigation>}
    </nav>
  );
};

export default Navigation;
