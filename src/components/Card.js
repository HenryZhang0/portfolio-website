import { MotionConfig } from 'framer-motion'
import React from 'react'
import back from '../cardBack.png'
import { motion } from 'framer-motion';
import { useState } from 'react'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}


export const Card = ({ title, click, xinit, xpos, invis }) => {
  const [isOpen, setIsOpen] = useState(true)

  const onMouseUp = () => {
    setIsOpen(false);
    click();
  }
  return (
    <motion.div
    initial = {{
        opacity: 0
    }}
      animate={{
        opacity: invis? 0: 1,
        top: 30
      }}
      exit={{ opacity: 0 }}

      transition={{ duration: 0.5 }}
    >
      <motion.div left={xpos*100} className="card" style={Style} onMouseUp={onMouseUp}
        drag whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img className='selector' src={back} height="100%"></img>
        <div style={TitleText}>{title}</div>
      </motion.div>
    </motion.div>
  )
}

const TitleText = {
  position: "absolute",
  top: "90%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white"
}

const Style = {
  border: "0px solid coral",
  position: "relative",
  textAlign: "center",
  height: "200px",
  width: "150px",
  left: "5%"
};


export default Card