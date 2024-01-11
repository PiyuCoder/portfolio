import React from "react";
import video from "../assets/bg-universe.mp4";
import fallBackImage from "../assets/fallback-image.png";

export default function Background() {
  return (
    <>
      <div className="w-full h-full fixed -z-30 bg-black opacity-40 md:opacity-25 "></div>
      <video
        className=" object-cover w-full h-full fixed -z-40"
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        poster={fallBackImage}
      >
        <source src={video} type="video/mp4"></source>
      </video>
    </>
  );
}
