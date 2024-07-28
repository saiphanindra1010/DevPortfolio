import React from "react";
import { IoOpenOutline, IoLogoGithub } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Project.css";
import projects from "../projectsData/projects";
const openLink = (x) => {
  // console.log(process.env.REACT_APP_Blog_api_key)
  // console.log(x)
  window.open(x);
  console.log(projects);
};
export const Projectgrid = () => {
  return (
    <div className="container">
      <div className="projects">
      {
          <div className="project">
            <img
              className="project-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZp_L0KoebpxD2e7-Cp2oTc5z374REGRYvw&s"
              alt="Cover"
            />
            <div className="project-content">
              <div className="project-inside">
                <h3 className="project-title">Go cli based anylatics</h3>
                <br></br>
                <p className="project-excerpt">
                  This project builds a URL shortener service with secure user
                  accounts (JWT auth) and user level access for managing
                  shortened links and their statistics.
                </p>
                <div className="tags-input-container">
                  <div>
                    <div className="tag">
                      <span className="text">Javascript</span>
                    </div>
                    <div className="tag">
                      <span className="text">GO</span>
                    </div>
                  </div>
                </div>
                <div className="live_github_links">
                  <div
                    className="links-content"
                    onClick={() => openLink(`https://www.google.com`)}
                  >
                    <IoOpenOutline className="svg1" />
                  </div>
                  <div
                    className="links-content"
                    onClick={() =>
                      openLink(
                        `https://github.com/saiphanindra1010/YTChatGuard`
                      )
                    }
                  >
                    <IoLogoGithub className="svg1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      {
          <div className="project" >
            <img
              className="project-image"
              src="https://blog.happyfox.com/wp-content/uploads/2019/05/in-app-chat-blog-cover-image.png"
              alt="Cover"
            />
            <div className="project-content">
              <div className="project-inside">
                <h3 className="project-title">Secure chat</h3>
                <br></br>
                <p className="project-excerpt">
                 Secure chat is encripted chat playform which can be self hosted it use algo RSA to securly store dat uses jwt auth
                </p>
                <div className="tags-input-container">
                  <div>
                    <div className="tag">
                      <span className="text">Node</span>
                    </div>
                    <div className="tag">
                      <span className="text">Express</span>
                    </div>
                    <div className="tag">
                      <span className="text">MongoDB</span>
                    </div>
                  </div>
                </div>
                <div className="live_github_links">
                  <div
                    className="links-content"
                    onClick={() => openLink(`https://www.google.com`)}
                  >
                    <IoOpenOutline className="svg1" />
                  </div>
                  <div
                    className="links-content"
                    onClick={() =>
                      openLink(
                        `https://github.com/saiphanindra1010/YTChatGuard`
                      )
                    }
                  >
                    <IoLogoGithub className="svg1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {
          <div className="project" >
            <img
              className="project-image"
              src="https://github.com/saiphanindra1010/CDN/blob/main/Projects/URL_Shortener.png?raw=true"
              alt="Cover"
            />
            <div className="project-content">
              <div className="project-inside">
                <h3 className="project-title">UrlSnip</h3>
                <p className="project-excerpt">
                  This project builds a URL shortener service with secure user
                  accounts (JWT auth) and user level access for managing
                  shortened links and their statistics.
                </p>
                <div className="tags-input-container">
                  <div>
                    <div className="tag">
                      <span className="text">Node</span>
                    </div>
                    <div className="tag">
                      <span className="text">Express</span>
                    </div>
                    <div className="tag">
                      <span className="text">MongoDB</span>
                    </div>
                  </div>
                </div>
                <div className="live_github_links">
                  <div
                    className="links-content"
                    onClick={() => openLink(`https://www.google.com`)}
                  >
                    <IoOpenOutline className="svg1" />
                  </div>
                  <div
                    className="links-content"
                    onClick={() =>
                      openLink(
                        `https://github.com/saiphanindra1010/YTChatGuard`
                      )
                    }
                  >
                    <IoLogoGithub className="svg1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {
          <div className="project">
            <img
              className="project-image"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e1e43128015103.5636e9751f11a.jpg"
              alt="Cover"
            />
            <div className="project-content">
              <div className="project-inside">
                <h3 className="project-title">Happy house tech consuting and development</h3>
                <div className="project-excerpt">
                  <br></br>
                  <p className="project-excerpt">Happy homes is furnitue manufacturare based in india,developed a tech infra structure for there e-commerse </p>
                  <br></br>
                  <ul >
                    <li>
                      Coded a landing page website
                    </li>
                    <li>
                      Developed a e-commers Rest api
                    </li>
                    <li>
                      Developed a AR based app
                    </li>
                  </ul>
                </div>
                <div className="tags-input-container">
                  <div>
                    <div className="tag">
                      <span className="text">Node</span>
                    </div>
                    <div className="tag">
                      <span className="text">Express</span>
                    </div>
                    <div className="tag">
                      <span className="text">MongoDB</span>
                    </div>
                  </div>
                </div>
                <br></br>
                <hr></hr>
                <div className="freelance">
                  <span className="text">
                    FreeLance <FaCode />{" "}
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        }
        {
          <div className="project" key="{project.node.slug}">
            <img
              className="project-image"
              src="https://github.com/saiphanindra1010/CDN/blob/main/Projects/ytmod.png?raw=true"
              alt="Cover"
            />
            <div className="project-content">
              <div className="project-inside">
                <h3 className="project-title">YTChatGuard</h3>
                <p className="project-excerpt">
                  ChatGuard is an AI-powered bot designed to moderate YouTube
                  live chat in real-time. It utilizes Genarative AI models like
                  openAI or Gemini API and ensure a safe and positive
                  environment for viewers.
                </p>
                <div className="tags-input-container">
                  <div>
                    <div className="tag">
                      <span className="text">Node</span>
                    </div>
                    <div className="tag">
                      <span className="text">Express</span>
                    </div>
                    <div className="tag">
                      <span className="text">MongoDB</span>
                    </div>
                  </div>
                </div>
                <div className="live_gitlinks">
                  <div className="live_github_links">
                    <div
                      className="links-content"
                      onClick={() =>
                        openLink(
                          `https://github.com/saiphanindra1010/YTChatGuard`
                        )
                      }
                    >
                      <IoLogoGithub className="svg1" />
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
