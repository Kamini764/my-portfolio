import React from 'react'
import "../about/about.css";

const About = () => {
  return (
     <div>
     <div className="about-content" >
      <div className='about-heading'>
        <h1> <br />ABOUT</h1>
        <div className="about-underline">
          <div className="underline1"></div>
          <div className="underline2"></div>
        </div>
      </div>
      <div className="about-text">
        <p>
           <h2>Hi there!</h2>I am a recent <span>Computer Science</span> graduate with skills in <span>MERN Stack development</span>. I have learned how 
            to build web applications using <span>MongoDB, Express.js, React.js, and Node.js</span>. During my studies
            <br />
            <br />
           "I worked on several projects that helped me understand both <span>front-end and back-end development</span>. 
            I enjoy solving problems, building user-friendly interfaces, and creating efficient applications.""
            <br />
            <br />
           " <span>As a fresher</span>, I am excited to start my career and apply what I have learned in a real work environment.
            I am eager to join a team where I can contribute, learn new things, and <span>grow as a developer</span>.
            I am also keen to stay updated with the latest technologies and keep improving my skills."
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </p>
      </div>
     </div>
    </div>
  )
}

export default About