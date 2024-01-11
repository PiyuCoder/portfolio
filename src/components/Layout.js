import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Background from "./Background";
import PlayerStats from "./PlayerStats";

export default function Layout() {
  return (
    <>
      <Nav />
      <Background />
      <Outlet />
      <PlayerStats />
    </>
  );
}
