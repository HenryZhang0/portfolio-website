import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
            className="panel"
        >
            <div className="title">
                Projects <hr></hr>
            </div>
            <div className="about-content">
                <div className="inner">

                    <div className="text-four">
                        I make projects for fun. I make projects for fun. I make projects for fun. I make projects for fun. I make projects for fun. I make projects for fun. I make projects for fun.
                    </div>


                </div>

            </div>
        </motion.div>

    )
}

export default Projects