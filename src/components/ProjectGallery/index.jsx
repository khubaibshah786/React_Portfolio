import React from "react";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { Ripple } from "primereact/ripple";

import { InputText } from "primereact/inputtext";

function ProjectGallery(props) {
  return (
    <div>
      <div className=" px-4 py-5 md:px-6 lg:px-8">
        <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
          <div className="mb-3 lg:mb-0">
            <div className="text-3xl font-medium text-900 mb-3">
              Project Gallery
            </div>
            <div className="text-700 mr-0 md:mr-3">
              Below are all the projects i have created as part of my EDX Front
              end developer course and personal Projects
            </div>
          </div>
          <span className="p-input-icon-left w-full md:w-auto">
            <i className="pi pi-search"></i>
            <InputText
              type="text"
              placeholder="Search"
              className="w-full md:w-auto"
            />
          </span>
        </div>
      </div>
      <div className=" px-4 py-8 md:px-6 lg:px-8">
        <div className="grid border-1 surface-border border-round">
          {props.projects.map((project) => (
            <div
              className="col-12 md:col-6 lg:col-4 md:border-right-1 border-bottom-1 surface-border"
              key={project.id}
            >
              <Link to={`/${project.id}`}>
                <div className="p-4">
                  <img
                    src={project.screenshot}
                    alt="Project"
                    className="w-full"
                  />
                  <div className="flex align-items-center justify-content-between mt-5 mb-3">
                    <span className="text-900 font-medium text-xl">
                      {project.title}
                    </span>
                    {project.isNew && (
                      <span
                        className="bg-blue-100 text-blue-700 font-bold text-sm px-2 py-1"
                        style={{ borderRadius: "1rem" }}
                      >
                        NEW
                      </span>
                    )}
                  </div>
                  {/* <span className="text-900">Brand</span>
                  <div className="text-900 text-xl font-medium mt-3">
                    {project.price}
                  </div> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
