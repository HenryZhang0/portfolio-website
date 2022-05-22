import React from "react";
import { AnimatePresence, motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="panel">
        <div className="title">
          Henry Zhang <hr></hr>
        </div>
        <div className="main-content">
          <div class="text-four">Fullstack Developer / Computer Science Student / University of Waterloo</div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
