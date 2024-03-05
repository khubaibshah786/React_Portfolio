import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Ripple } from "primereact/ripple";
import { PrimeReactProvider } from "primereact/api";
import { StyleClass } from "primereact/styleclass";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import ProjectGallery from "./components/ProjectGallery";

// import { projects } from './project'
import projects from './projects.json'; // Correct import statement
import Wrapper from "./components/Wrapper";
import Resume from "./components/Resume";

import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-dark-teal/theme.css"; //theme
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";
function App() {
  return (
    <PrimeReactProvider value={{ ripple: true, StyleClass: true }}>
      <Router>
        <div className="App">
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/ProjectGallery" element={<ProjectGallery projects={projects} />} />
            </Routes>
          </Wrapper>
        </div>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
