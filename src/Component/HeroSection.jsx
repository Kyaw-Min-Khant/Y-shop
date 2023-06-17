import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../Statecontext/StateContext";
import HeroProduct from "./HeroProduct";
import SecondSection from "./SecondSection";
const HeroSection = () => {
  const { hide, setHide } = StateContextCustom();
  useEffect(() => {
    setHide(true);
  }, []);
  return (
    <div className="bg-[#F6F1F1]">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://static.nike.com/a/images/f_auto/dpr_0.9,cs_srgb/w_1405,c_limit/cdd81af0-b3cf-4ee5-9981-09b8473acb3a/nike-just-do-it.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 text-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-sans text-white">
              Welcome to{" "}
              <span className=" border-b-4 border-blue-400">YKT</span> Store
            </h1>
            <p className="mb-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/CardGenerate">
              <button className="btn text-white bg-[#19A7CE] outline-none border-none">
                Shopping Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <SecondSection />
      <HeroProduct />
    </div>
  );
};

export default HeroSection;
