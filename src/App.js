import NavBar from "./components/Navbar.jsx";
import "./App.css";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import GetInTouch from "./components/GetInTouch.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about-me" element={<AboutMe />}/>
      <Route path="/work" element={<Work />}/>
      <Route path="/get-in-touch" element={<GetInTouch />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
