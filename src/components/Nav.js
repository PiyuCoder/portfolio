import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navData } from "../dummyData/navData";
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="flex items-start fixed bottom-0 w-full  gap-4 p-4 box-border md:-top-0 md:left-1/2 md:w-auto md:gap-10 md:h-20">
      {navData.map((data, i) => (
        <Link
          className=" text-center flex flex-col justify-center flex-1 items-center bg-opacity-80 hover:opacity-100 md:flex-none"
          to={`/${data.path}`}
          key={i}
        >
          <img className=" h-8 md:h-10" src={data.image} />
          {location.pathname === `/${data.path}` ? (
            <h2 className=" text-white m-0 p-1 text-xs">{data.name}</h2>
          ) : (
            ""
          )}
        </Link>
      ))}
    </div>
  );
}
