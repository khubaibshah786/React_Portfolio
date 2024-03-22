import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../../projects.js";

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
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="w-full lg:hidden">
          <div className="text-900 text-3xl font-medium">Feature Title</div>
          <p className="text-600 text-xl line-height-3 mb-6"></p>
        </div>
        <div className="grid justify-content-center flex-column lg:flex-row">
          <div className="col-12 lg:col-6 py-4 lg:pr-4 flex-order-2 lg:flex-order-1">
            <div className="w-full hidden lg:block">
              <div className="text-900 text-3xl font-medium mb-3">
                <span className="block text-6xl font-bold  drop-in">
                  My{" "}
                  <span style={{ color: "var(--primary-color)" }}>
                    {projectData?.title}
                  </span>
                </span>
              </div>
              {/* <p className="text-600 text-xl line-height-3 mb-6">
                Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum
                varius duis at consectetur lorem donec.
              </p> */}
            </div>
            <div className="flex py-2">
              {/* <i className="pi pi-wallet text-4xl font-bold text-900"></i> */}
              <div className="">
                <div className="text-900 font-medium text-2xl">Description</div>
                <p className="text-700">{projectData?.description}</p>
              </div>
            </div>
            <div className="flex py-2">
              {/* <i className="pi pi-video text-4xl font-bold text-900"></i> */}
              <div className="">
                <div className="text-900 font-medium text-2xl">
                  GitHub Link:
                </div>
                <p className="text-700">
                  <a
                    href={projectData?.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData?.deployedLink}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex py-2">
              {/* <i className="pi pi-tags text-4xl font-bold text-900"></i> */}
              <div className="">
                <div className="text-900 font-medium text-2xl">Live Site</div>
                <p className="text-700">
                  <a
                    href={projectData?.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData?.deployedLink}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex py-2">
              {/* <i className="pi pi-tags text-4xl font-bold text-900"></i> */}
              <div className="">
                <div className="text-900 font-medium text-2xl">Youtube</div>
                <p className="text-700">
                  <a
                    href={projectData?.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData?.youtubeLink}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-6 flex-order-1 lg:flex-order-2 mt-5">
            <img
              className="border-round w-full"
              src={projectData.screenshot}
              alt={projectData?.title}
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
      </div>

     </div>
  );
}

export default Project;
