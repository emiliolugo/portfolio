"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import image1 from "/public/images/wordsearch.png"
export default function Navbar() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end']});
    
    const words = [
         "Engineer", "Web Developer", "Student", "Learner", "Innovator", "Designer", 
        "Creator", "Thinker", "Problem Solver", "Artist", "Coder", "Analyst", 
        "Mentor", "Leader", "Researcher", "Technologist", "Strategist", "Enthusiast", 
        "Writer", "Explorer", "Entrepreneur", "Collaborator", "Visionary", 
        "Planner", "Organizer", "Developer", "Architect", "Producer", 
        "Consultant", "Instructor"
    ];
    const scale4 = useTransform(scrollYProgress, [0, 1], [45, 2]); // Adjust the scale to zoom in more initially
    const scaleSub= useTransform(scrollYProgress, [0, 1], [2, 2]); // Adjust the scale to zoom in more initially

    const getRandomPosition = () => {
        const top = Math.random() * 90 + "vh"; // Random top position
        const left = Math.random() * 90 + "vw"; // Random left position
        return { top, left };
    };

    const floatingAnimation = {
        x: [0, 30, -30, 30, -30, 0],
        y: [0, 30, 0, -30, 0, 30],
    }

    return (
        <div className=" larger" ref={ref}>
            
                <div className="sticks bg-yellow-500">
                    <div className="element">
                        <motion.div style= {{ scale: scale4, zIndex: 99 }} className="name-containter z-99">
                            <h1 className="font-black text-white text-center text-6xl">Emilio <br></br>Lugo</h1> 
                        </motion.div>
                        {words.map((word, index) => {
                        const { top, left } = getRandomPosition();
                        return (
                            <motion.div
                                key={index}
                                style={{  scale: scaleSub, position: 'absolute', top, left, zIndex: 0 }}
                                className="name-container"
                                animate={floatingAnimation}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 5, 
                            
                            ease: "linear",
                            repeatType: "loop",
                            delay: Math.random() * 4 // Adding random delay for staggered effect
                        }}
                            >
                                <h1 className="font-light text-black/20 text-center text-2xl">{word}</h1>
                            </motion.div>
                        );
                    })}
                    </div>
                </div>
                
        </div>
    );
}
