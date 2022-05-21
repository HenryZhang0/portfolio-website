import React from 'react'
import back from '../cardBack.png'

export const Card = ({title}) => {
  return (
    <div className="card" style={Style}>
        <img src = {back} height = "100%"></img>
        <div style={TitleText}>{title}</div>
    </div>
  )
}

const TitleText = {
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

const Style = {
    border: "2px solid coral",
    position: "relative",
    textAlign: "center",
    height: "200px",
    width: "150px",
    left: "5%"
};


export default Card