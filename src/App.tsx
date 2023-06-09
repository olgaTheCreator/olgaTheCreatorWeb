import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutMe } from "./components/AboutMe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/about" />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" />
          <Route path="resources" />
          <Route path="contact" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
