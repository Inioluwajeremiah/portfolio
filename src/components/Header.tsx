import { useEffect, useState } from "react";
import HamburgerMenuIcon from "../assets/icons/MenuIcon";
import { NavLink } from "react-router-dom";
import ThemeIcon from "../assets/icons/ThemeIcon";

const navItemsData = [
  {
    title: "About Me",
    route: "/#about",
  },
  {
    title: "Skills",
    route: "#ßskills",
  },
  {
    title: "Experience",
    route: "#experience",
  },
  {
    title: "Projects",
    route: "#projects",
  },
  {
    title: "Education",
    route: "#education",
  },
  {
    title: "Contact",
    route: "#contact",
  },
];
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleTheme = () => {
    setToggleTheme(!toggleTheme);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setToggleTheme(true);
    } else {
      setToggleTheme(false);
    }
  }, []);

  useEffect(() => {
    if (toggleTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleTheme]);

  return (
    <header className="dark:bg-[#222] dark:text-white bg-white shadow-md h-20 w-full fixed top-0 left-0">
      <div className="container mx-auto w-full h-full flex flex-row items-center justify-between">
        {/* logo */}
        <div className={`flex flex-row items-center `}>
          <NavLink to={"/#portfolio"}>
            <p className="text-3xl font-bold text-green-800">
              {/* Inioluwa <span>Adewara</span> */}
              Portfolio
            </p>
          </NavLink>
          {/* toggle theme */}

          <button className="ml-4" onClick={handleToggleTheme}>
            <ThemeIcon />
          </button>
        </div>

        <nav
          className={` fixed lg:relative flex flex-col lg:flex-row items-center lg:h-full lg:top-0 lg:-left-0 lg:w-fit ${
            toggleMenu
              ? " left-0 top-20 h-screen justify-center bg-white w-full "
              : "-left-full"
          }`}
        >
          {navItemsData.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `ml-4 text-green-800 text-sm ${isActive} ? "" :""`
              }
              to={item.route}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        <button className=" lg:hidden" onClick={handleToggleMenu}>
          <HamburgerMenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
