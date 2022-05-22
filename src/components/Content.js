import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const Content = ({ children }) => {
  return (
    <motion.div className='content'
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}

export default Content