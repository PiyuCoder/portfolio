import React from "react";
import PropTypes from "prop-types";
import avatar from "../assets/my-avatar.png";

export default function Avatar({ page }) {
  return (
    <>
      <span className="w-full h-full fixed -z-10 bg-black opacity-60 md:opacity-50 "></span>
      <img
        className={`fixed -z-20 overflow-hidden ${
          page === "about"
            ? "-bottom-36 scale-150  left-1/2 -translate-x-1/2 h-3/4"
            : " -bottom-3/4 -left-5  translate-x-0 -scale-x-105 md:-bottom-3/4 md:left-16"
        } `}
        src={avatar}
        alt="Avatar"
      />
    </>
  );
}

Avatar.prototype = {
  page: PropTypes.string.isRequired,
};
