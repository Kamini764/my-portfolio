import React from 'react';
import "../project/project.css"
import ProjectCard from './ProjectCard';


const myproject=[
  {
    id:1,
    project_img:"/img/mernstack.jpg",
    project_title:"Trip Website ",
    project_discription:"Discover exciting travel destinations worldwide with our Trip Planner .Easily search for places in any country and start planning your perfect trip today."
    ,skills: ["MongoDB","Express","React","Node.js"],
    links: "https://github.com/Kamini764/Trip-website" 
  },
  {
    id:2,
    project_img:"/img/mona.jpg",
    project_title:"E-Commarce Website",
    project_discription:"Explore our e-commerce platform for a seamless shopping experience. Browse and buy products from various categories with ease and convenience!"
    ,skills: ["HTML","CSS","Bootstrap","Javascript","React"],
    links: "https://github.com/Kamini764/E-commerce-website" 
  },
  {
    id:3,
    project_img:"/img/mernstack.jpg",
    project_title:"Trip Website ",
    project_discription:"Discover exciting travel destinations worldwide with our Trip Planner .Easily search for places in any country and start planning your perfect trip today."
  , skills: ["JavaScript", "React", "CSS", "HTML"],
    links: "https://github.com/kamini764" 
},
  {
    id:4,
    project_img:"/img/mona.jpg",
    project_title:"E-Commarce Website",
    project_discription:"Explore our e-commerce platform for a seamless shopping experience. Browse and buy products from various categories with ease and convenience!"
    ,skills: ["JavaScript", "React", "CSS", "Bootstrap"],
    links: "https://github.com/kamini764" 

  }

]

const Project = () => {
  return (
    <>
       <div className="project-content" style={{backgroundColor:"black",color:"white"}}>
            <div className="project-heading1">
              <h2>PROJECT</h2>
              <div className="project-underline">
              <div className="underline1"></div>
              <div className="underline2"></div>
            </div>
        </div>
        <div className="project-heading2">
               <h3>MY PERSONAL PROJECTS</h3>
            </div>
            <div className="container-fluid">
              <div className="row">
              {myproject.map((myproject)=>(
                <div key={myproject.id} className='col-md-6'>
                   <ProjectCard
                    project_img={myproject.project_img}
                    project_title={myproject.project_title}
                    project_discription={myproject.project_discription}
                    skill={myproject.skills} 
                    links={myproject.links}
                   />
                </div>
              ))}
              </div>
            </div>
            <br />
            <br />
            </div>
    </>
  )
}

export default Project