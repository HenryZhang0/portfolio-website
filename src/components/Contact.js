import React from 'react'
import {  motion } from 'framer-motion';

const Contact = (onclick) => {
  return (
    <motion.div className="contact" onClick = {onclick}
    drag whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
        Contact
    </motion.div>
  )
}

export default Contact