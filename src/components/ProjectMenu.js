import React, { useState } from "react";
import { projectData } from "../dummyData/projectData";

export default function ProjectMenu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className=" h-screen flex flex-col justify-center py-30 gap-3 px-6 md:flex-row md:items-center md:justify-center  sm:px-5 lg:px-44">
      <div className=" px-8">
        {projectData.map((project, i) => (
          <h1
            onClick={() => setCurrentIndex(i)}
            key={i}
            className={`p-2 px-4  md:w-60  rounded-e-3xl text-center text-xs transition-all cursor-pointer  md:hover:bg-gradient-to-r md:hover:from-transparent md:hover:to-slate-400 md:text-lg ${
              currentIndex === i
                ? "bg-gradient-to-r from-transparent to-purple-950 text-sm"
                : ""
            } `}
          >
            {project.name}
          </h1>
        ))}
      </div>

      <div className="flex flex-col items-start px-8 md:px-16 md:pe-32">
        <p className=" ps-2 md:pe-20 bg-gradient-to-l from-transparent to-purple-950 text-sm md:text-lg">
          {projectData[currentIndex].name}{" "}
        </p>
        <img
          className=" rounded-md rounded-tr-3xl h-24 md:h-64"
          src={projectData[currentIndex].image}
          alt="project"
        />
        <p className=" text-xs p-2 md:text-base">
          {projectData[currentIndex].description}
        </p>
        <div className=" gap-4 flex  justify-around">
          <a
            href={`${projectData[currentIndex].github}`}
            target="_blank"
            className=" border-2 text-xs border-cyan-800 rounded-3xl p-2 px-4 md:text-lg md:hover:bg-slate-800 md:hover:bg-opacity-35 md:hover:text-cyan-600"
          >
            GitHub
          </a>
          <a
            href={`${projectData[currentIndex].demo}`}
            target="_blank"
            className=" border-2 text-xs  md:text-lg border-cyan-800 rounded-3xl p-2 px-4 md:hover:bg-slate-800 md:hover:bg-opacity-35 md:hover:text-cyan-600"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
