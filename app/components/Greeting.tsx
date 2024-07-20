"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";

export const Greeting = () => {
    const [introText, setIntroText] = useState("Hello");

    useEffect(() => {
        const firstInterval = setInterval(() => {
            setIntroText("I Am...");
            const secondInterval = setInterval(() => {
                setIntroText("Emilio Lugo");
            }, 2000);
            return () => clearInterval(secondInterval);
        }, 2000);
        return () => clearInterval(firstInterval);
    }, []);

    return (
        <motion.div
          style={{ width: '100px', height: '100px', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          className="box bg-dark"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["50%", "50%", "0%", "20%"],
            opacity: [1, 1, 1, 1, 0]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 0,
            repeatDelay: 1
          }}
        >
          <motion.div
            animate={{
                rotate: [0, 0, -180, -180, 0],
            }}
            transition={{
                duration: 6, 
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: 0,
                repeatDelay: 1
              }}
            className=" absolute x-5"
          >
                {introText}
          </motion.div>
        </motion.div>
    );
};