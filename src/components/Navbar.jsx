import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const NavBar = () => {
  //GSAP
  useEffect(() => {
    let logo = gsap.utils.toArray(".logo");
    gsap.to(logo, {
      ease: "elastic.out(1,0.3)",
      duration: 1,
      yoyo: true,
    });
  }, []);

  const checkTheme = () => {
    const savedTheme = localStorage.getItem("checkTheme");
    return savedTheme ? JSON.parse(savedTheme) : "light-theme";
  };
  const [theme, setTheme] = useState(checkTheme);
  const toggleTheme = () => {
    setTheme(`${theme === "dark-theme" ? "light-theme" : "dark-theme"}`);
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
    { name: "Contact Me", link: "/contact" },
  ];
  return (
    <>
      <nav className="transition-color ease-in-out duration-[600ms] sticky top-0 pt-[10px] lg:pt-[15px] z-50 backdrop-blur-lg h-[15vh]">
        <div className="z-50 top-0 flex items-center justify-between lg:px-20 px-6 py-4 relative">
          {
            //Logo
            <div className="logo items-center flex-shrink-0">
              <h1 className="font-sans font-bold text-[21px] lg:text-[1.8rem] text-heading">
                SUSHIL KUMAR
              </h1>
            </div>
          }
          {
            //cta-buttons-desktop
            <div className="space-x-4 lg:flex justify-center items-center text-nowrap itemAnimate">
              <button
                onClick={() => toggleTheme()}
                className="transition-color ease-in-out duration-[300ms] rounded-full px-3 py-3 text-text bg-secondary hover:bg-text hover:text-link-text"
              >
                {theme === "light-theme" ? (
                  <Moon size={22} />
                ) : (
                  <Sun size={22} />
                )}
              </button>

              <Link
                to="/hire-me"
                className={`hidden lg:flex transition-color ease-in-out duration-[300ms] rounded-full bg-text px-6 py-3 text-link-text font-semibold animate-button`}
              >
                Hire Me
              </Link>
            </div>
          }
        </div>
      </nav>
    </>
  );
};
export default NavBar;
