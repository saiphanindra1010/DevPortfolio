import React from "react";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Footer/>
    </>
  );
};

export default Home;
