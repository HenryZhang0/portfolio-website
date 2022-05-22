import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import './test.css';
const AboutMe = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="panel">
        <div class = "text-one">Henry Zhang</div>
        <div className="title">
          About Me <hr></hr>
        </div>
        <div className="main-content">
          <div class="text-four">I'm a well rounded epic individual. I've done a lot of stuff and I'm actually really good at the exact thing you'd like me to do.</div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
