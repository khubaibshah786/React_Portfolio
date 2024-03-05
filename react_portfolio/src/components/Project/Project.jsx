import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../../projects.json";

function Project() {
  const { id } = useParams();

  const [projectData, setProjectData] = useState([]);
  console.log("id here ", id);

  useEffect(() => {
    const project = projects.filter(

      (singularProject) => singularProject.id == id
    );
    setProjectData(...project);
}, []);
useEffect(() => {
    console.log("singular project ", projectData?.title);
  }, [projectData])
  
  return (
    <div>
      <h2>{projectData?.title}</h2>
      <p>
        Deployed Link:{" "}
        <a href={projectData?.deployedLink} target="_blank" rel="noopener noreferrer">
          {projectData?.deployedLink}
        </a>
      </p>
      <p>
        GitHub Link:{" "}
        <a href={projectData?.githubLink} target="_blank" rel="noopener noreferrer">
          {projectData?.githubLink}
        </a>
      </p>
      <img src={projectData?.screenshot} alt={projectData?.title} />
    </div>
  );
}

export default Project;
