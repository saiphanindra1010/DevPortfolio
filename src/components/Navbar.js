import "./styles/Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"


export const Navbar = () => {

const [click,setClick]=useState(false);
const handleClick=()=>
{
  console.log("Clicked!");
  setClick(!click);
}
// const handleClick = () => {
//   console.log("Button clicked!");
// };
return (
    <div className="header">
      <Link to="/">
        <h1>Pef</h1>
      </Link>
      
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <h1>Projects</h1>
          </Link>
        </li>
        <li>
          <Link target="_blank" to="/blogs">
            <h1>Blog</h1>
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            <h1>Contact</h1>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {
        click?( <FaTimes size={20} style={{color:"black"}}/>)
        :(<FaBars size={20} style={{color:"black"}}/>)}
</div>
    </div>
/* <button onClick={handleClick}>Click me!</button> */
  );
}
