import React from 'react'
import { Navbar } from '../components/Navbar'
import { Button, Tooltip } from 'antd';
import { Html5Outlined } from '@ant-design/icons';
const Home = () => {
  return (
    <div>

            <Navbar/>
        {/* <button className="btn" type="button">Click Me!</button> */}

        <p>Home</p>
      
       
        <h2 class="section-title">Tech Stack</h2>
        <section id="stack" class="stack">

          <div><h3 class="section-title">Languages</h3>
    <div class="stack-container">
      <div class="tech-container">
      <Tooltip placement="bottom" title="HTML">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="Furry white cat sitting on a wall"/>
        </Tooltip>
        <Tooltip placement="bottom" title="css">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="Furry white cat sitting on a wall"/>
        </Tooltip>
      </div></div>
        
    </div> 

    <div><h3 class="section-title">Framworks and libraye</h3>
    <div class="stack-container">
      <div class="tech-container">
      <Tooltip placement="bottom" title="HTML">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="Furry white cat sitting on a wall"/>
        </Tooltip>
        <Tooltip placement="bottom" title="css">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="Furry white cat sitting on a wall"/>
        </Tooltip>
      </div></div>
        
    </div> 

    <div><h3 class="section-title">Backend</h3>
    <div class="stack-container">
      <div class="tech-container">
      <Tooltip placement="bottom" title="HTML">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="Furry white cat sitting on a wall"/>
        </Tooltip>
        <Tooltip placement="bottom" title="css">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="Furry white cat sitting on a wall"/>
        </Tooltip>
      </div></div>
        
    </div> 
  </section>
    </div>


  )
}

export default Home