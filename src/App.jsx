import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Ripple } from "primereact/ripple";
import { PrimeReactProvider } from "primereact/api";
import { StyleClass } from "primereact/styleclass";
import Header from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import ProjectGallery from "./components/ProjectGallery";
import Project from "./components/Project/Project";
import Contact from "./components/Contact";

// import { projects } from './project'
import projects from './projects.json'; // Correct import statement
import Wrapper from "./components/Wrapper";
import Resume from "./components/Resume";

// change the theme by adding any of the below themes:

// primereact/resources/themes/bootstrap4-light-blue/theme.css
// primereact/resources/themes/bootstrap4-light-purple/theme.css
// primereact/resources/themes/bootstrap4-dark-blue/theme.css
// primereact/resources/themes/bootstrap4-dark-purple/theme.css
// primereact/resources/themes/md-light-indigo/theme.css
// primereact/resources/themes/md-light-deeppurple/theme.css
// primereact/resources/themes/md-dark-indigo/theme.css
// primereact/resources/themes/md-dark-deeppurple/theme.css
// primereact/resources/themes/mdc-light-indigo/theme.css
// primereact/resources/themes/mdc-light-deeppurple/theme.css
// primereact/resources/themes/mdc-dark-indigo/theme.css
// primereact/resources/themes/mdc-dark-deeppurple/theme.css
// primereact/resources/themes/tailwind-light/theme.css
// primereact/resources/themes/fluent-light/theme.css
// primereact/resources/themes/lara-light-blue/theme.css
// primereact/resources/themes/lara-light-indigo/theme.css
// primereact/resources/themes/lara-light-purple/theme.css
// primereact/resources/themes/lara-light-teal/theme.css
// primereact/resources/themes/lara-dark-blue/theme.css
// primereact/resources/themes/lara-dark-indigo/theme.css
// primereact/resources/themes/lara-dark-purple/theme.css
// primereact/resources/themes/lara-dark-teal/theme.css
// primereact/resources/themes/soho-light/theme.css
// primereact/resources/themes/soho-dark/theme.css
// primereact/resources/themes/viva-light/theme.css
// primereact/resources/themes/viva-dark/theme.css
// primereact/resources/themes/mira/theme.css
// primereact/resources/themes/nano/theme.css
// primereact/resources/themes/saga-blue/theme.css
// primereact/resources/themes/saga-green/theme.css
// primereact/resources/themes/saga-orange/theme.css
// primereact/resources/themes/saga-purple/theme.css
// primereact/resources/themes/vela-blue/theme.css
// primereact/resources/themes/vela-green/theme.css
// primereact/resources/themes/vela-orange/theme.css
// primereact/resources/themes/vela-purple/theme.css
// primereact/resources/themes/arya-blue/theme.css
// primereact/resources/themes/arya-green/theme.css
// primereact/resources/themes/arya-orange/theme.css
// primereact/resources/themes/arya-purple/theme.css

import "primereact/resources/themes/arya-orange/theme.css"; //theme
        
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";
function App() {
  return (
    <PrimeReactProvider value={{ ripple: true, StyleClass: true }}>
      <Router>
        <div className="App">
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/ProjectGallery" element={<ProjectGallery projects={projects} />} />
              <Route path="/:id" element={<Project/>} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Wrapper>
        </div>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
