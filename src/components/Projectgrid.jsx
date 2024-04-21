import React from 'react'
import { IoOpenOutline,IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./styles/Project.css";

  const openLink = (x) => {
    // console.log(process.env.REACT_APP_Blog_api_key)
    // console.log(x)
    window.open(x);
  };
export const Projectgrid = () => {
  return (
    <div className="container">

      <div className="projects">      

{
     
     <div className="project" key="{project.node.slug}">
       <img className="project-image" src="https://fronty.com/static/uploads/How_to_Convert_Image_to_Code_1.jpg" alt="Cover" />
       <div className="project-content">
         <div className="project-inside">
           <h3 className="project-title">Safe chat</h3>
           <p className="project-excerpt">
           S-CHAT is a real-time chat app using Node.js and Socket.IO, 
           featuring RSA encryption for end-to-end security. 
           Developed a scalable backend for instant messaging and group chats, 
           demonstrating expertise in secure communication.
           S-CHAT is a real-time chat app using No, 
           demonstrating expertise in secure communication.
           </p>
           <div className="tags-input-container">
           <div className="React-tag" >
             <span className="text">React</span>
             
         </div>  <div className="React-tag" >
             <span className="text">React</span>
             
         </div>  <div className="React-tag" >
             <span className="text">React</span>
             
         </div>  <div className="React-tag" >
             <span className="text">React</span>
             
         </div>  <div className="React-tag" >
             <span className="text">React</span>
             
         </div> 
     
         <div>   
         <div className="Node-tag" >
             <span className="text">Node</span>
         </div>              
      
         <div className="Express-tag" >
             <span className="text">Express</span>
         </div>
         <div className="Mongo-tag" >
             <span className="text">MongoDB</span>
         </div>
     </div>
</div>
     <div className="live_github_links">
         <div className="links-content" onClick={() =>
                  openLink(
                    `https://www.google.com`
                  )}>
          
             <IoOpenOutline  className='svg1'/>
         </div>
          <div className="links-content"  onClick={() =>
                  openLink(
                    `https://www.google.com`
                  )}>
         
             <IoLogoGithub  className='svg1' />
         </div>
     </div>
         </div>
       </div>

  
     </div>
}
{
     
     <div className="project" key="{project.node.slug}">
       <img className="project-image" src="https://fronty.com/static/uploads/How_to_Convert_Image_to_Code_1.jpg" alt="Cover" />
       <div className="project-content">
         <div className="project-inside">
           <h3 className="project-title">URL Shortner</h3>
           <p className="project-excerpt">
           S-CHAT is a real-time chat app using Node.js and Socket.IO, 
           featuring RSA encryption for end-to-end security. 

           </p>
           <div className="tags-input-container">


     
         <div>   
         <div className="Node-tag" >
             <span className="text">Node</span>
         </div>              
         <div className="React-tag" >
             <span className="text">React</span>
         </div>  
         <div className="Express-tag" >
             <span className="text">Express</span>
         </div>
         <div className="Mongo-tag" >
             <span className="text">MongoDB</span>
         </div>
     </div>
</div>
     <div className="live_github_links">
         <div className="links-content" onClick={() =>
                  openLink(
                    `https://www.google.com`
                  )}>
          
             <IoOpenOutline  className='svg1'/>
         </div>
          <div className="links-content"  onClick={() =>
                  openLink(
                    `https://www.google.com`
                  )}>
         
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

