import React, { useState } from "react";
import { skillsData } from "../dummyData/skillsData";
const levels = [1, 2, 3, 4, 5, 6];

export default function SkillsMenu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className=" flex flex-col w-screen h-screen items-center justify-between py-32 md:py-60 md:ps-60">
      <div>
        {skillsData.map((data, i) => (
          <h1
            className={`p-2 px-4 ps-16 rounded-e-3xl text-xs md:text-sm text-center transition-all cursor-pointer  md:hover:bg-gradient-to-r md:hover:from-transparent md:hover:to-slate-400 ${
              currentIndex === i
                ? "bg-gradient-to-r from-transparent to-purple-950 text-sm lg:text-lg"
                : ""
            } `}
            onClick={() => setCurrentIndex(i)}
            key={i}
          >
            {data.title}
          </h1>
        ))}
      </div>

      <div>
        <div className="flex flex-col gap-2">
          {skillsData[currentIndex].skills.map((item, i) => (
            <div key={i} className=" flex items-center gap-2 justify-center">
              <p>{item.skill}</p>
              <div className=" flex gap-1">
                {levels.map((el, index) => (
                  <div
                    key={index}
                    className={`w-5 h-5   ${
                      index < item.level
                        ? " bg-gradient-to-b from-cyan-950 to-cyan-400 rounded-sm"
                        : "bg-gradient-to-b from-cyan-950 to-cyan-700 rounded-sm opacity-50"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
