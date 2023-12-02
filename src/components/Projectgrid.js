import React from 'react'
import { IoOpenOutline,IoLogoGithub } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Button, Tooltip } from 'antd';
import "./styles/Project.css";
export const Projectgrid = () => {
  return (
    <div className="container">

      <div className="projects">      
{
     
        <div className="project" key="{project.node.slug}">
          <img className="project-image" src="https://fronty.com/static/uploads/How_to_Convert_Image_to_Code_1.jpg" alt="Cover" />
          <div className="project-content">
            <div className="project-inside">
              <h3 className="project-title">E-commers</h3>
              <p className="project-excerpt">
               Thism functionlity and its cool as a cucumber and is op with stripe and paments and is secure secure secure secure using sha glgo rithem fro best security using cryptography
              </p>
              <div className="tags-input-container">
              <div className="Html-tag" >
                <span className="text">HTML</span>
                

            </div> 
         
            <div className="Css-tag" >
                <span className="text">CSS</span>
            </div>
            <div className="Html-tag" >
                <span className="text">NODE</span>
                

            </div> 
         
            <div className="Css-tag" >
                <span className="text">GQL</span>
            </div>              <div className="Html-tag" >
                <span className="text">KAFLka</span>
                

            </div> 
         
            <div className="Css-tag" >
                <span className="text">CSS</span>
            </div>
        </div>
        <div className="live_github_links">
            <div className="links-content" >
             
                <IoOpenOutline  className='svg1'/>
            </div>
             <div className="links-content">
            
                <IoLogoGithub  className='svg1' />
            </div>
        </div>
            </div>
          </div>

     
        </div>
}


      </div>
    </div>
  )
}
