import React from "react";
import { Tooltip } from "antd";
import jsimg from "../images/js.svg"
import reactimg from "../images/react.svg"
import Javaimg from "../images/java.svg"
import "./styles/Skills.css";
export const Skills = () => {
  return (
    <>
      <section id="stack" className="stack">
        <h2 className="section-title" >Skills</h2>
        <div  className="sec">
        <div>
          <h3 className="section-title1">Languages</h3>
          <div className="stack-container">
            <div className="tech-container">
              <Tooltip title="Java" placement="bottom" color="rgb(28,28,28)">
                <img
                  src={Javaimg} width="50"
                  alt="Docker"
                />{" "}
              </Tooltip>
              <Tooltip title="Javascript" placement="bottom" color="rgb(28,28,28)">
                <img
                  src={jsimg} width="50"
                  alt="Docker"
                />{" "}
              </Tooltip>

            </div>
          </div>
        </div>
        <div>
          <h3 className="section-title1">Backend</h3>
          <div className="stack-container">
            <div className="tech-container">
            </div>
          </div>
        </div>
        <div>
          <h3 className="section-title1">Framworks and libraye</h3>
          <div className="stack-container">
            <div className="tech-container">
            
            <Tooltip title="React" placement="bottom" color="rgb(28,28,28)">
                <img
                  src={reactimg} width="50"
                  alt="Docker"
                />{" "}
              </Tooltip>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
