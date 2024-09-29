import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = (props) => {
  const {project_img,project_title,project_discription,skill,links}=props;
  return (
    <div>
          <div className="Trip-website-project">
              <img src={project_img} alt="" />
              <div className="Trip-website-project-text">
                  <h3>{project_title}</h3>
                  <p>{project_discription}</p>
              </div>
              <div className='skills-container'>
              {
                skill.map((skill,index)=>(
                  <span key={index} className='skill-item'>
                    {skill}
                  </span>
                ))
              }
              </div>
              <div className="project-links">
                <a href={links}><FontAwesomeIcon icon={faGithub} /></a>
              </div>
          </div>
     </div>
  )
}

export default ProjectCard