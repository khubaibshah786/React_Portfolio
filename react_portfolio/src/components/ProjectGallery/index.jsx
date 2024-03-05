import React from "react";
import { Card } from "primereact/card";
import { Ripple } from "primereact/ripple";

function ProjectGallery(props) {
  return (
    <div>
      <span className="block text-6xl font-bold mb-4 drop-in ml-6">
        My <span style={{ color: "var(--primary-color)" }}>Projects</span>
      </span>
      <div className="grid p-6">
        {props.projects.map((project) => (
          <div key={project.id} className="col">
            <Card
              title={project.title}
              className="p-ripple"
              style={{
                border: `1px solid var(--primary-color)`,
                color: `var(--primary-color)`,
              }}
            >
              {/* <Ripple
                pt={{
                  root: { style: { background: "var(--primary-color)" } },
                }}
              /> */}
              <div className="border-round-sm font-bold">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  style={{ width: "50vh", height: "30vh" }}
                />
                <p>
                  Deployed Link:{" "}
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.deployedLink}
                  </a>
                </p>
                <p>
                  GitHub Link:{" "}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.githubLink}
                  </a>
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
