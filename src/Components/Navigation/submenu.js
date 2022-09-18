import React from "react";
import NavLink from "Components/Navigation/NavLink";

const Submenu = ({ item }) => {
  return (
    <>
      <a href="#">{item.label}</a>
      <ul>
        {item.subitems.map((subitem) => (
          <li>
            <NavLink to={subitem.route} end className={subitem.class}>
              {subitem.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Submenu;
