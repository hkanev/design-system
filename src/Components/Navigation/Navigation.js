import React from "react";
import NavLink from "Components/Navigation/NavLink";
import "./Navigation.scss";

import Submenu from "./submenu";

const Navigation = ({ mainNav, UserNavigation, className }) => {
  return (
    <nav className={`top-navigation ${className}`}>
      {mainNav.map((item) =>
        item.subitems.length ? (
          <Submenu item={item}></Submenu>
        ) : (
          <NavLink to={item.route} end className={item.class}>
            {item.label}
          </NavLink>
        )
      )}

      {UserNavigation && <UserNavigation></UserNavigation>}
    </nav>
  );
};

export default Navigation;
