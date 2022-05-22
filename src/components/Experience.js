import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{duration: 0.5}}>
            <div className="panel">
                EXPERIENCES
            </div>
        </motion.div>

    )
}

export default Projects