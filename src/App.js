import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Card from "./components/Card.js";
import Leftsidebar from "./components/Leftsidebar";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import Content from "./components/Content";
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
          <div className="content" id="poo">
            <Routes>
              <Route exact path="/" element={<h1>Home Page</h1>} />
              <Route exact path="page1" element={<AboutMe />} />
              <Route exact path="page2" element={<Projects />} />
            </Routes>
          </div>

          <div className="model">
            <img src={pika} width="80%"></img>
          </div>
          <div className="cardHolder">
            <Card title="About Me" click={() => {
              console.log("click");
              navigate("/page1");
              
            }}></Card>
            <Card title="Projects"></Card>
            <Card title="Experience"></Card>
          </div>
        </div>
    </AnimatePresence>
    // 

    //   <Router>
    //     <Leftsidebar>
    //     <Routes>

    //       <Route index element={
    //         <Leftsidebar />
    //       }></Route>
    //       <Route path="page1" element={

    //         <div className="content" id="poo">
    //           <AboutMe></AboutMe>
    //         </div>
    //       }>
    //       </Route>

    //       <Route path="/page2" element={
    //         <div className="content" id="poo">
    //           <Projects></Projects>
    //         </div>
    //       }>
    //       </Route>

    //   {/* 
    // <div className="model">
    //   <img src={pika} width="80%"></img>
    // </div>
    // <div className="cardHolder">
    //   <Card title="About Me" click={() => {
    //     console.log("click");
    //     changePanel(<AboutMe></AboutMe>);
    //   }}></Card>
    //   <Card title="Projects"></Card>
    //   <Card title="Experience"></Card>
    // </div> */}

    //     </Routes>
    //     </Leftsidebar>
    //   </Router>
    // </AnimatePresence>
  );
}

export default App;
