import React from "react";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { Hero } from "../components/Hero";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />

    </>
  );
};

export default Home;
