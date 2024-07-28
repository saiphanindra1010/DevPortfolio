import "./styles/Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"


export const Navbar = () => {

const [click,setClick]=useState(false);

const handleClick=()=>
{
  // console.log("Clicked!");
  setClick(!click);
}
// const handleClick = () => {
//   console.log("Button clicked!");
// };
return (
    <div className={click?"header active":"header"}>
      <Link  to="/">
        <h1 className="logo_top">SP</h1>
      </Link>
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
          <Link to="/">
            <h1 className="anc">Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <h1 className="anc">Projects</h1>
          </Link>
        </li>
        <li>
        <Link to="/blogs">
            <h1 className="anc" >Blog</h1>
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            <h1 className="anc">Contact</h1>
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
