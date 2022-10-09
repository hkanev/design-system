import {React, useState} from "react";
import NavLink from "Components/Navigation/NavLink";

const Submenu = ({ item }) => {
  const [visible, setVisible] = useState(false);
  
  function changeVisibility(e) {
    e.preventDefault();
    setVisible(prev => !prev)
  }

  return (
    <>
      <a href="#" onClick={changeVisibility} className="submenu-link">{item.label}</a>
      {visible && <ul className="sub-menu">
        {item.subitems.map((subitem, index) => (
          <li key={index}>
            <NavLink to={subitem.route} end className={subitem.class}>
              {subitem.label}
            </NavLink>
          </li>
        ))}
      </ul>}
    </>
  );
};



export default Submenu;
