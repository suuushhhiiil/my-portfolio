import NavBar from "./components/Navbar.jsx";
import { useEffect } from "react";
import "./App.css";
import Main from "./components/Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import GetInTouch from "./components/GetInTouch.jsx";
import "lenis/dist/lenis.css";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/work" element={<Work />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
