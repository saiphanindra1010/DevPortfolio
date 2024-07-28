import React from "react";
import "./styles/Hero.css";
export const Hero = () => {
  return (
    <>
      <section className="section banner banner-section">
        <div className="container banner-column">
          <div className="banner-inner">
            <div className="paragraph">Hi 👋, </div>
            {/* <br></br> */}I Am Sai Phanindra
            <div className="banner-inner">
              This is my development portfolio 💻
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
