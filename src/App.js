import React from "react";
// import "./index.css"
import './index.css'
import Home from "./routes/Home"
import Project from "./routes/Project"
// import Contact from "./routes/Contact"
import Contact from "./routes/Contact";
import { Blog } from "./routes/Blog";
import { Route, Routes } from "react-router-dom";
import { Notfoundpage } from "./routes/Notfoundpage";


function App() {
  return (
<>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/projects" element={<Project/>}></Route>
<Route path="/blogs" element={<Blog/>}></Route>
<Route path="/contacts" element={<Contact/>}></Route>
<Route path="*" element={<Notfoundpage/>}></Route>
</Routes>
  </>
  );
}

export default App;
