import React from 'react'
import { motion } from 'framer-motion';

const Contact = (onclick) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className="panel">
      <div className="title">
        Contact <hr></hr>
      </div>
      <div className="about-content">
        <div className="inner">
          <div class="text-four">
            As previously mentioned, I am always open to new learning opportunities and would love to connect!
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact