import React from 'react';
import "../experience/experience.css"

const Experience = () => {
  return (
    <>
      <div className="exp-content" style={{backgroundColor:"black",color:"white"}}>
        <div className="exp-heading">
          <h2>EXPERIENCE</h2>
          <div className="exp-underline">
          <div className="underline1"></div>
          <div className="underline2"></div>
        </div>
        </div>
        <div className="exp-text d-block">
           <h2>Front End Developer</h2>
           <h4>Consult IT -Internship</h4>
           <p>
             I designed and developed responsive, interactive user interfaces using <span>HTML, CSS, and JavaScript</span> to ensure seamless user experiences across different devices and screen sizes, optimizing for both desktop and mobile users.
             <br />
              Collaborated with <span>UI/UX designers </span>to transform wireframes and prototypes into fully functional <span>front-end code</span>, focusing on clean, organized design that aligns with the brand’s visual identity and user requirements.
               <br />
              Ensured cross-browser compatibility by testing and resolving issues on various browsers, and improved website performance by optimizing <span>CSS, JavaScript,</span> and image assets for faster load times.
              <br />
              Debugged and troubleshooted <span>front-end code</span> using browser developer tools and frameworks, identifying and resolving bugs and inconsistencies to enhance the overall functionality and usability of the website.
              <br />
              Worked closely with backend developers to <span>integrate RESTful APIs</span>, ensuring smooth data flow and user interactions with the backend systems, while also maintaining version control using Git for efficient code management.
                      </p>
                      <br />
                      <br /><br />
        </div>
      </div>
    </>
  )
}

export default Experience