import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Project from "@/pages/Project";
import About from "@/pages/About";
import Notfound from "@/pages/Notfound";

export default function RootRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Notfound />}/>
    </Routes>
  );
}
