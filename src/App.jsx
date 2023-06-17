import React from "react";
import CardGenerate from "./Component/CardGenerate";
import SecondNav from "./Component/SecondNav";
import AddToCard from "./Component/AddToCard";
import Details from "./Component/Details";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Component/HeroSection";
import Footer from "./Component/Footer";

const App = () => (
  <div className="bg-white/90">
    <SecondNav />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/CardGenerate" element={<CardGenerate />} />
      <Route path="/AddToCard" element={<AddToCard />} />
      <Route path="/Details" element={<Details />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
