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

    const controls = useDragControls()

    const [isReset, setIsReset] = useState(false);

    // Create motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Use transform to map boolean state to transform values
    const xTransform = useTransform(x, [0, 100], [0, 100]);
    const yTransform = useTransform(y, [0, 100], [0, 100]);

    // Update motion values when isReset changes
    useEffect(() => {
        if (isReset) {
            // Animate to 100 when reset
            x.set(100);
            y.set(100);
        } else {
            // Animate back to 0 when not reset
            x.set(0);
            y.set(0);
        }
    }, [isReset, x, y]);

    return (
        <motion.div className="flex items-baseline">
            <motion.div className="mr-auto" drag
             onDragStart={() => setIsReset(false)}
             onDragEnd={() => setIsReset(true)}
             style={{ x, y }}
             >
                <h1 className="text-4xl font-black">Emilio Lugo</h1>
                <p className="font-light text-zinc-500">Engineer - Web Designer - Student</p>
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
                        <a className="hover:text-zinc-500">
                        {tab.name}
                        </a>
                    </motion.ul>
                ))}
            </motion.div>
        </motion.div>
    );
}
