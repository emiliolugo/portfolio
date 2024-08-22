"use client"
import { motion } from "framer-motion";

import ContactForm from "./Form";


import { Stalinist_One } from "next/font/google";
import Socials from "./Socials";
const stalinist_one = Stalinist_One({ subsets: ["latin"], weight: '400',variable: '--font-stalinist_one'});
export default function ContactPage() {
    return (
        <div className="bg-[#132156] h-[80vh] md:h-screen md:p-20 p-10 md:relative">
            {/* Container for lines */}
            <div className="md:block hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Left Vertical Line */}
                <motion.div
                    className="absolute bottom-7 left-5 bg-white rounded-full"
                    initial={{ height: 0 }}
                    animate={{ height: "20vh" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    style={{ width: "1px", zIndex: 1 }} // Ensure it's above other content
                />
                {/* Right Vertical Line */}
                <motion.div
                    className="absolute bottom-7 right-5 bg-white rounded-full"
                    initial={{ height: 0 }}
                    animate={{ height: "20vh" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    style={{ width: "1px", zIndex: 1 }} // Ensure it's above other content
                />
                {/* Top Horizontal Line */}
                <motion.div
                    className="absolute bottom-5 right-7 bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "20vh" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    style={{ height: "1px", zIndex: 1 }} // Ensure it's above other content
                />
                {/* Bottom Horizontal Line */}
                <motion.div
                    className="absolute bottom-5 left-7 bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "20vh" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    style={{ height: "1px", zIndex: 1 }} // Ensure it's above other content
                /></div>
            </div>
            <div className="text-white md:p-8 md:relative md:z-10">
                <h1 className={`text-4xl md:text-5xl mb-10 text-center md:text-start ${stalinist_one.className}`}>
                    CONT<span className="text-yellow-500">ACT</span>
                </h1>
                <div className="md:flex items-end  md:justify-start md:gap-x-10 mt-10">
                
                <ContactForm />
                <Socials />
                </div>
            </div>
        </div>
    )
}
