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
import Projector from "./components/Projector.js";
import Pizza from "./components/Pizza.js";
import Portalgun from "./components/Portalgun.js";
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
        <div className="right-section">

          {/* <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}>*/}
            <Routes>
              <Route exact path="/" element={<></>} />
              <Route exact path="about" element={<Projector item={<Pizza/>} name = "pizza" id = "a"/>} />
              <Route exact path="projects" element={<Projector item={<Portalgun/>} name = "Portal gun" id = "aa"/>} />
              <Route exact path="experience" element={<></>} />
            </Routes>
              
          {/* </motion.div> */}
          <div className="cardHolder">
            <Card title="About Me" click={() => { navigate("/about") }} />
            <Card title="Projects" click={() => { navigate("/projects") }} />
            <Card title="Experience" click={() => { navigate("/experience") }} />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
