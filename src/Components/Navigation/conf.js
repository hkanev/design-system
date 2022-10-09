import { FaHeart } from "react-icons/fa";
export const mainNav = [
  {
    icon: <FaHeart/>,
    label: "Home",
    route: "/",
    active: false,
    class: "",
    "tooltip:": "",
    subitems: [],
  },
  {
    icon: "",
    label: "Users",
    route: "/users",
    class: "",
    "tooltip:": "",
    subitems: [],
  },
  {
    icon: "",
    label: "Tracking",
    route: "/tracking",
    class: "",
    "tooltip:": "",
    subitems: [],
  },
  {
    icon: "",
    label: "Test",
    route: "",
    class: "",
    "tooltip:": "",
    subitems: [
      {
        icon: "",
        label: "Home",
        route: "/",
        active: false,
        class: "",
        "tooltip:": "",
        subitems: [],
      },
      {
        icon: "",
        label: "Users",
        route: "/users",
        class: "",
        "tooltip:": "",
        subitems: [],
      },
    ],
  },
];

export const userNav = [
  {
    icon: "",
    label: "Login",
    route: "/",
    active: false,
    class: "red",
    "tooltip:": "",
    subitems: [],
  },
  {
    icon: "",
    label: "Register",
    route: "/",
    active: false,
    class: "red",
    "tooltip:": "",
    subitems: [],
  },
];
