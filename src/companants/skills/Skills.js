import React from 'react';
import "../skills/skill.css"

const Skills = () => {
  return (
    <>
      <div className="skills-content" style={{backgroundColor:"black",color:"white"}}>
            <div className=" skills-heading">
            <br />
              <h1>SKILLS</h1>
              <div className="underline">
                <div className="underline1"></div>
                <div className="underline2"></div>
              </div>
            </div>
        <div className="container-fluid-classs d-block">
          <div className=" skills-text">
            <div className="skills-text-item">
              <h3>Web Design</h3>
              <p>I love designs and it's the first step before creating any website as I can give layout to my imagination</p>
            </div>
            <div className="skills-text-item">
             <h3>Web Development</h3>
             <p>I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.</p>
            </div>
            <div className="skills-text-item">
              <h3>Problem Solving</h3>
              <p>I love solving problems whether programming problems or real life problems.</p>
            </div>
          </div>
          <div className="core-skills">
          <div className="core-skills-heading">
            <h2>Tech I'm familiar with</h2>
          </div>
          <div className="skills-list">
            <div>HTML5</div>
            <div>CSS3</div>
            <div>Bootstrap</div>
            <div>Javascript</div>
            <div>ReactJS</div>
            <div>Nodejs</div>
            <div>ExpressJS</div>
            <div>MongoDB</div>
            <div>Mongoose</div>
            <div>Rest API</div>
            <div>Git/Github</div>
            <div>Jira</div>
            <div>Postman</div>
            <div>Python</div>
            <div>Mysql</div>
            <div>Figma</div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills