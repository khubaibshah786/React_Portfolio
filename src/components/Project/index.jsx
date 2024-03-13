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
  }, [projectData]);

  return (
    <div>
      <div className=" px-4 py-5 md:px-6 lg:px-8">
        <div className="border-bottom-1 surface-border">
          <span className="block text-6xl font-bold mb-4 drop-in">
            My{" "}
            <span style={{ color: "var(--primary-color)" }}>
              {projectData?.title}
            </span>
          </span>
        </div>
        <p>
          Deployed Link:{" "}
          <a
            href={projectData?.deployedLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectData?.deployedLink}
          </a>
        </p>
        <p>
          GitHub Link:{" "}
          <a
            href={projectData?.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectData?.githubLink}
          </a>
        </p>
        <img
          src={projectData.screenshot}
          alt={projectData?.title}
          style={{ width: "50%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Project;
