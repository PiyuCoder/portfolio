import React, { useState } from "react";
import { aboutData } from "../dummyData/aboutData";

export default function AboutMenu() {
  const [selectedHeading, setCurrentHeading] = useState(0);
  return (
    <div className=" flex flex-col w-full h-screen items-center justify-between gap-10 py-32 md:flex-row md:px-44">
      <div className=" flex flex-col gap-2 items-center mr-10 md:mr-0 md:mt-20">
        {aboutData?.map((data, i) => (
          <h1
            className={`p-2 px-4 ps-16 rounded-e-3xl text-xs md:text-sm text-center transition-all cursor-pointer  md:hover:bg-gradient-to-r md:hover:from-transparent md:hover:to-slate-400 ${
              selectedHeading === i
                ? "bg-gradient-to-r from-transparent to-purple-950 text-sm lg:text-lg"
                : ""
            } `}
            key={i}
            onClick={() => setCurrentHeading(i)}
          >
            {data?.heading.toUpperCase()}
          </h1>
        ))}
      </div>
      <div>
        <div className=" bg-black w-64 p-3 py-6 rounded-xl bg-opacity-70 md:w-96">
          <div className=" flex items-center justify-start gap-2">
            <img
              className=" w-6 lg:w-10"
              src={aboutData[selectedHeading]?.icon}
            />
            <h1 className=" text-sm lg:text-lg">
              {aboutData[selectedHeading]?.heading.toUpperCase()}
            </h1>
          </div>
          {aboutData[selectedHeading]?.subHeadings?.map((subHeading, i) => (
            <div key={i} className=" mt-3">
              <h2
                className="p-2 rounded-s-3xl text-xs lg:text-lg
             bg-gradient-to-l from-transparent to-purple-950"
              >{`${subHeading?.title.toUpperCase()} ${subHeading?.year}`}</h2>
              <p className=" text-xs p-2 lg:text-sm">
                {subHeading?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
