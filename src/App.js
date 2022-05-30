import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
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
import Keyboard from "./components/Keyboard.js";
import Hologram from "./components/Hologram.js";
import pika from './Pika_PNG.png'
import cassette from './cassette.png'
import cartridge from './cartridge.png'
import usb from './usb.png'
import harddrive from './harddrive.png'


function App() {
  const changePanel = (newPanel) => {
    let element = document.getElementById("poo")
    element.innerHTML = <>newPanel</>
  }
  const navigate = useNavigate();
  const location = useLocation();
  return (

    <div className="App">
      <Leftsidebar></Leftsidebar>
      {/* <Contact></Contact> */}
      <div className="content">
        <AnimatePresence exitBeforeEnter initial={false} >
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="about" element={<AboutMe />} />
            <Route exact path="projects" element={<Projects />} />
            <Route exact path="experience" element={<Experience />} />
            <Route exact path="contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <div className="right-section">

        <Routes>

          <Route exact path="/" element={<Projector />} />
          <Route exact path="about" element={<Projector item={<Pizza />} name="pizza" id="a" />} />
          <Route exact path="projects" element={<Projector item={<Portalgun />} name="Portal gun" id="aa" />} />
          <Route exact path="experience" element={<Projector item={<Keyboard />} name="Keyboard" />} />
          <Route exact path="contact" element={<Projector name="Contact" />} />
        </Routes>

        <div className="cardHolder">
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route exact path="/" element={
                <div className="cardHolder">
                  <Card title="About Me" img={cassette} click={() => { navigate("/about") }} order={0}/>
                  <Card title="Projects" img={cartridge} click={() => { navigate("/projects") }} order={1}/>
                  <Card title="Experience" img={usb} click={() => { navigate("/experience") }} order={2}/>
                  <Card title="Contact" img={harddrive} click={() => { navigate("/contact") }} order={3}/>
                </div>
              } />
              <Route exact path="about" element={
                <div className="cardHolder">
                  
                  <Card title="Projects" img={cartridge} click={() => { navigate("/projects") }} order={0}/>
                  <Card title="Experience" img={usb} click={() => { navigate("/experience") }} order = {1}/>
                  <Card title="Contact" img={harddrive} click={() => { navigate("/contact") }} order = {2}/>
                  <Card title="Home" click={() => { navigate("/") }} order={3}/>
                </div>
              } />
              <Route exact path="projects" element={
                <div className="cardHolder">
                  <Card title="About Me" img={cassette} click={() => { navigate("/about") }} order={0}/>
                  <Card title="Experience" img={usb} click={() => { navigate("/experience") }} order={1}/>
                  <Card title="Contact" img={harddrive} click={() => { navigate("/contact") }} order = {2}/>
                  <Card title="Home" click={() => { navigate("/") }} order={3}/>
                </div>
              } />
              <Route exact path="experience" element={
                <div className="cardHolder">
                  <Card title="About Me" img={cassette} click={() => { navigate("/about") }} order={0}/>
                  <Card title="Projects" img={cartridge} click={() => { navigate("/projects") }} order={1}/>
                  <Card title="Contact" img={harddrive} click={() => { navigate("/contact") }} order = {2}/>
                  <Card title="Home" click={() => { navigate("/") }} order={3}/>
                </div>
              } />
              <Route exact path="contact" element={
                <div className="cardHolder">
                  <Card title="About Me" img={cassette} click={() => { navigate("/about") }} order={0}/>
                  <Card title="Projects" img={cartridge} click={() => { navigate("/projects") }} order={1}/>
                  <Card title="Experience" img={usb} click={() => { navigate("/experience") }} order={2}/>
                  <Card title="Home" click={() => { navigate("/") }} order={3}/>
                </div>
              } />
            </Routes>
          </AnimatePresence>
        </div> 
      </div>
    </div>
  );
}

export default App;
