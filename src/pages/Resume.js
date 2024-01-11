import React from "react";
import resume from "../assets/resume.docx";
import Avatar from "../components/Avatar";

export default function Resume() {
  return (
    <div className="flex flex-col gap-4 w-screen h-screen items-center justify-center">
      <Avatar />
      <p>Here's My Latest Resume!!</p>
      <a
        className=" border-2 p-3 px-6 rounded-3xl"
        href={resume}
        download={"Piyush_Rai_Resume.docx"}
      >
        Download Resume
      </a>
    </div>
  );
}
