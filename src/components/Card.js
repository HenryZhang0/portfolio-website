import { MotionConfig } from 'framer-motion'
import React from 'react'
import back from '../cardBack.png'
import {  motion } from 'framer-motion';

export const Card = ({title, click}) => {
  return (
    <motion.div className="card" style={Style} onMouseUp = {click}
    drag whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
        <img className='selector' src = {back} height = "100%"></img>
        <div style={TitleText}>{title}</div>
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