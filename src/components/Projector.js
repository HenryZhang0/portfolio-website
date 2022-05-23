import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Pizza from "./Pizza.js";
import Model from './Model.js'
const Projector = ({ item, name }) => {
    return (
        
            <div className='model'>
                <Model item={item}></Model>
            </div>
    )
}

export default Projector