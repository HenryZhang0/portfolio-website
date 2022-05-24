import { MotionConfig } from 'framer-motion'
import React from 'react'
import back from '../cardBack.png'
import { motion } from 'framer-motion';
import { useState } from 'react'




export const Card = ({ title, click, order, img }) => {
  const [die, setDie] = useState(false);
  const onMouseUp = () => {
    click();
  }
  return (

    <motion.div className="card" style={Style} onMouseUp={onMouseUp} onClick={() => { setDie(true) }}
      drag whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}

      initial={{ opacity: 1 }}
      animate={{
        x: `${(110*order).toString()}%` ,
        y: 0,
        opacity: 1,
      }}
      exit={
        {
          x: 0,
          y : 0,
          opacity: die? 0:1
        }
      }
      transition={{ duration: 0.3, delay: 0, stiffness:70, type:"spring", ease:"easeIn" }}
    >
      <img className='selector' src={img} width= "100%"></img>
      {/* <div style={TitleText}>{title}</div> */}
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
  position: "absolute",
  textAlign: "center",
  height: "200px",
  width: "20%",
  left: "5%"
};


export default Card