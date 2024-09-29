import React from 'react'
import '../home/home.css';
import About from '../about/About';
import Skills from '../skills/Skills';
import Experience from "../experience/Experience";
import Project from "../project/Project";


const Home = () => {
  return (
    <div>
      <div className="home-container" >
        <div className="g-0 d-flex" style={{ backgroundColor: "black", alignItems: "center", justifyContent: "space-between", padding: "20px" }}>
          <div className="home-text" style={{ color: "white" }}>
            <h4>I am</h4>
            <h1>Kamini Sharma</h1>
            <h1>MERN Stack Developer</h1>
            <div className="home-button" style={{ marginTop: "20px" }}>
              <button type="button" style={{ marginRight: "10px" }}>Resume</button>
              <button type="button">Skills</button>
            </div>
          </div>

          <div className="home-img">
            <img src="/img/mona3.jpg" alt="my_img"/>
          </div>
        </div>
      </div>

      <About/>
      <Skills/>
      <Experience/>
      <Project/>
    </div>
  )
}

export default Home