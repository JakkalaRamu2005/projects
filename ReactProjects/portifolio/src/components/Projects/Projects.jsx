import projectsData from "./ProjectSection"
import './project.css'

const Projects = () => {
  return (
    <>
    <h1>Project Section</h1>
    <div className="projects-section">
        
      {projectsData.map((project)=>(
         <div className="project-card">
            <div>
             <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href=""></a>
            </div>
         
         </div>
      ))}
    </div>
    </>
    
  )
}

export default Projects
