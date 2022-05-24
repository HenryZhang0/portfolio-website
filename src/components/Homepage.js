import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import './test.css';

const Homepage = () => {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
            className="panel"
            >
            <div class="text-four">Hi, my name is</div>
            <div className="big">
                Henry Zhang.
            </div>
            <div className="big color2">
                Pick up a card and drop it.
            </div>
            <div className="main-content">

            </div>
        </motion.div>

    )
}

export default Homepage