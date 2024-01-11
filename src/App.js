import React from "react";
import Nav from "./components/Nav";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Skils from "./pages/Skils";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<About />} />
      <Route path="skills" element={<Skils />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
