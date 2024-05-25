import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Our Offerings",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Investments",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Services",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Insurance",
        path: "/blog",
        newTab: false,
      },
    ],
  },
];
export default menuData;
