import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Card from "./components/Card.js";
import Leftsidebar from "./components/Leftsidebar";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import Content from "./components/Content.js";
import Contact from "./components/Contact.js";
import Experience from "./components/Experience.js";
import Homepage from "./components/Homepage.js";
import Model from "./components/Model.js";
import pika from './Pika_PNG.png'

function App() {
  const changePanel = (newPanel) => {
    let element = document.getElementById("poo")
    element.innerHTML = <>newPanel</>
  }
  const navigate = useNavigate();

  return (
    <AnimatePresence exitBeforeEnter >
        <div className="App">
          <Leftsidebar></Leftsidebar>
          <Contact></Contact>
          <div className="content" id="poo">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="about" element={<AboutMe />} />
              <Route exact path="projects" element={<Projects />} />
              <Route exact path="experience" element={<Experience />} />
            </Routes>
          </div>
          <div className = "right-section">

          <div className="model">
            {/* <img src={pika} width="60%"></img> */}
            <Model></Model>
          </div>
          <div className="cardHolder">
            <Card title="About Me" click={() => {navigate("/about")}}/>
            <Card title="Projects" click={() => {navigate("/projects")}}/>
            <Card title="Experience" click={() => {navigate("/experience")}}/>
          </div>
          </div>
        </div>
    </AnimatePresence>
  );
}

export default App;
