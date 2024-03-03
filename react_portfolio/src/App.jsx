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

import Wrapper from "./components/Wrapper";
import Resume from "./components/Resume";

import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/md-dark-deeppurple/theme.css"; //theme
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <PrimeReactProvider value={{ ripple: true, StyleClass: true }}>
      <Router>
        <div className="App">
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Wrapper>
        </div>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
