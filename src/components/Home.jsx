import React from "react";
import heroImage from "../assets/Mock-up.png";
import Button from "./Button";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className={`transition-color ease-in-out duration-[600ms] relative bg-background lg:h-[90vh]`}
      >
        <div className="max-[975px]:flex max-[975px]:flex-col lg:flex justify-between items-center lg:px-20 px-3 lg:h-[80vh]">
          <div className="itemAnimate mb-7 lg:mb-0 lg:w-3/5 flex flex-col items-center justify-center">
            <h1 className="transition-color ease-in-out duration-500 text-heading text-5xl lg:text-[3.5vw] md:text-5xl text-center font-semibold my-4">
              Crafting Stunning Graphics & User-Centric Interfaces
            </h1>
            <span className="text-text text-xl lg:text-2xl md:text-2xl mb-4 text-center">
              Experienced Graphic Designer | Aspiring UI/UX Specialist
            </span>
            <div className="itemAnimate cta-buttons flex flex-col space-y-4 lg:block mt-[10px] lg:space-x-[15px]">
               <Link to="/work" className={`rounded-full bg-primary px-3 py-3 text-button-text`}>View My Work</Link>
               <Link to="/get-in-touch" className={`transition-color ease-in-out duration-[400ms] hover:bg-primary rounded-full hover:text-button-text px-3 py-2 border-[1px] border-primary`}>Get In Touch</Link>
              
            </div>
          </div>
          <div className="lg:w-2/5 lg:mb-0 mb-4">
            <img src={heroImage} alt="" className="h-[75vh] rotate-[30deg] mt-2" />
          </div>
        </div>
        <div className="itemAnimate flex items-center justify-center lg:w-fit space-x-3 py-2 px-4 rounded-full ml-20 w-fit">
          <LinkedIn
            sx={{ fontSize: 33 }}
            className="transition-all ease-out duration-500 text-primary hover:text-[#0077b5] cursor-pointer"
          />
          <Twitter
            sx={{ fontSize: 33 }}
            className="text-primary hover:text-[#008AD8] cursor-pointer"
          />
          <GitHub
            sx={{ fontSize: 33 }}
            className="transition-color ease-out duration-500 text-primary hover:text-[#2b3137] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
export default Home;
