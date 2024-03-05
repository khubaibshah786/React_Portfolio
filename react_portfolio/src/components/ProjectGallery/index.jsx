import React from "react";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import Project from "../Project/Project";
import { Ripple } from "primereact/ripple";
function ProjectGallery(props) {
  console.log("project props", props);
  return (
    <div>
      <div className=" px-4 py-5 md:px-6 lg:px-8">
    <div className="border-bottom-1 surface-border">
        <span className="block text-3xl font-medium text-900 mb-4">
        <span className="block text-6xl font-bold mb-4 drop-in">
        My <span style={{ color: "var(--primary-color)" }}>Projects</span>
      </span>
        </span>



    </div><div className="grid p-6">
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
                </Card>
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>

      
    </div>
  );
}

export default ProjectGallery;
