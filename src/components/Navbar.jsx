import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logoDarkMode from "../assets/Logo-Dark-Mode.png";
import logoLightMode from "../assets/Logo-Light-Mode.png";
import "../styles/Navbar.css";
import Button from "./Button";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const checkTheme = () => {
    const savedTheme = localStorage.getItem("checkTheme");
    return savedTheme ? JSON.parse(savedTheme) : "light-theme";
  };
  const [theme, setTheme] = useState(checkTheme);
  const toggleTheme = () => {
    setTheme(`${theme === "dark-theme" ? "light-theme" : "dark-theme"}`);
  };
  const toggleMenu = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("checkTheme", JSON.stringify(theme));
  }, [theme]);
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-me" },
    { name: "Work", link: "/work" },
    { name: "Skills", link: "/skills" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact Me", link: "/contact" },
  ];
  return (
    <>
      <nav className="transition-color ease-in-out duration-[600ms] sticky pt-[30px] z-50 py-y backdrop-blur-lg h-[20vh] bg-background">
        <div className="z-50 top-0 flex items-center justify-between lg:px-20 px-6 py-4 relative">
          <div className="items-center flex-shrink-0">
            <img
              src={theme === "light-theme" ? logoLightMode : logoDarkMode}
              alt=""
              className="lg:h-[2vw] h-7"
            />
          </div>
          {/*
            <div className="hidden lg:flex bg-secondary rounded-full">
              <ul className="itemAnimate flex items-center text-nowrap text-heading text-[18px]">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className={`hover:bg-primary rounded-full hover:text-button-text px-3 py-2`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            */}
          <div className="lg:hidden md:flex flex items-center z-10000">
            <Button
              type="secondary"
              label={
                theme === "light-theme" ? <Moon size={22} /> : <Sun size={22} />
              }
              callFunction={() => toggleTheme()}
            />
            <Button
              type="primary"
              label={mobileDrawerOpen ? <X size={20} /> : <Menu size={20} />}
              callFunction={toggleMenu}
            />
          </div>
          <div className="hidden space-x-4 lg:flex justify-center items-center text-nowrap itemAnimate">
            <button
              onClick={() => toggleTheme()}
              className="transition-color ease-in-out duration-[200ms] rounded-full bg-sec px-3 py-3 text-text bg-secondary hover:bg-primary hover:text-link-text"
            >
              {theme === "light-theme" ? <Moon size={22} /> : <Sun size={22} />}
            </button>

            <Link
              to="/hire-me"
              className={`transition-color ease-in-out duration-[400ms] rounded-full bg-text hover:bg-primary px-6 py-3 text-link-text font-semibold`}
            >
              Hire Me
            </Link>
            <button
              onClick={() => toggleMenu()}
              className="transition-color ease-in-out duration-[600ms] rounded-full px-6 py-3 text-text bg-secondary hover:bg-text hover:text-link-text flex justify-between items-center"
            >
              {mobileDrawerOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {
            <div
              className={`hidden menu fixed right-20 z-200 p-12 bg-white lg:flex flex-col justify-center items-center rounded-[12px] ${mobileDrawerOpen ? `showMenu` : `hideMenu`
                }`}
            >
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={`transition-color ease-out duration-[600ms] px-6 py-3 my-1 hover:bg-primary hover:text-text rounded-full hover:text-button-text text-3xl`}
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <div className=" space-x-3 justify-center items-center text-nowrap py-4">
                <Link to="/hire" />
              </div>
            </div>
          }
      </nav>
    </>
  );
};
export default NavBar;
