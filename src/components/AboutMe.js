import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import './test.css';
import Skills from './Skills.js';
import henry from '../henry.jpg';
const AboutMe = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
        rotateY: 45,
        rotateX: 10
      }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className="panel">
      <div className="title">
        About Me <hr></hr>
      </div>
      <div className="about-content">
        <div className="inner">
          <div className="text-four">
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </div>
          <div className="text-four">
            Here are some of my skills:
          </div>
          <Skills />
        </div>
        <div className="photo">

          <img src={henry} width="100%" />
        </div>

      </div>
    </motion.div>
  );
};

export default AboutMe;
