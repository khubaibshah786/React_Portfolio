import React from "react";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import Project from "../Project/Project";
import { Ripple } from "primereact/ripple";
function ProjectGallery(props) {
  console.log("project props", props);
  return (
    <div>
      <span className="block text-6xl font-bold mb-4 drop-in ml-6">
        My <span style={{ color: "var(--primary-color)" }}>Projects</span>
      </span>
      <div className="grid p-6">
        {props.projects.map((project) => (
          <React.Fragment key={project.id}>
            <div className="col">
              <Link to={`/${project.id}`}>
                <Card title={project.title} className="p-ripple p-6"
                style={{
                  border: `1px solid var(--primary-color)`,
                  color: `var(--primary-color)`,
                }}>
                <Ripple
                pt={{
                  root: { style: { background: "var(--primary-color)" } },
                }}
              />
              <img src={project.screenshot} alt={project.title} />
                </Card>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
