import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" />
          <Route path="projects" />
          <Route path="contact" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
