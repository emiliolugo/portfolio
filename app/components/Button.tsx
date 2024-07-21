"use client"

import { motion } from "framer-motion"


export const Button = () =>{
    return(
    <motion.button
        whileTap={{ scale: 0.97 }}
        className="bg-indigo-700 p-4 rounded-xl hover:bg-indigo-600
        text-white"
      >
          Check out my projects!
        </motion.button>
        )
}

