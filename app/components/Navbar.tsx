"use client"

import { motion, useDragControls, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react";

export default function Navbar() {
    const tabs = [
        { name: "Skills" },
        { name: "Projects" },
        { name: "Websites" },
        { name: "Resume" },
        { name: "Contact" },
    ];

    // Variants for individual tab animation
    const itemVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: { opacity: 1, y: 0 },
    };

    // Variants for the container to control stagger effect
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // Adjust stagger duration as needed
            },
        },
    };


    return (
        <motion.div className="flex items-baseline text-white">
            <motion.div className="mr-auto" drag
        dragConstraints={{ left: 20, right: 20, top:20, bottom: 20 }}
        >
                <h1 className="text-4xl font-black">Emilio Lugo</h1>
                <p className="font-light text-zinc-300">Engineer - Web Designer - Student</p>
            </motion.div>
            <motion.div
                className="flex gap-x-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {tabs.map((tab, index) => (
                    <motion.ul key={index} variants={itemVariants} className=""
                    whileHover={{scale:1.05}}>
                        <a className="text-zinc-500 hover:text-zinc-600">
                        {tab.name}
                        </a>
                    </motion.ul>
                ))}
            </motion.div>
        </motion.div>
    );
}
