"use client"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import CSSlogo from "/public/css-3.svg"
import HTMLlogo from "/public/html-1.svg"
import JSlogo from "/public/javascript-1.svg"
import pythonLogo from "/public/python-5.svg"
import reactLogo from "/public/react-2.svg"
import TFLogo from "/public/tensorflow-2.svg"
import NextLogo from "/public/next.svg"
import javaLogo from "/public/jee-3.svg"
import SQLLogo from "/public/sql-database-generic-svgrepo-com.svg"
import { useEffect, useState } from "react"

export default function Skills(){
    const languages = [
        { src: CSSlogo, alt: "CSS Logo", name:"CSS", color: "text-[#1C73BA]" },
        { src: HTMLlogo, alt: "HTML Logo", name:"HTML", color: "text-[#E34F26]" },
        { src: JSlogo, alt: "JavaScript Logo", name:"JavaScript", color: "text-[#E9CA32]" },
        { src: pythonLogo, alt: "Python Logo", name:"Python", color: "text-green-700"},
        { src: reactLogo, alt: "React Logo", name:"React", color: "text-[#61DAFB]" },
        { src: TFLogo, alt: "TensorFlow Logo", name:"TensorFlow", color: "text-orange-500" },
        { src: NextLogo, alt: "Next.js Logo", name:"Next.js", color: "text-black-500" },
        { src: javaLogo, alt: "Java Logo", name:"Java", color: "text-[#5482A0]" },
        { src: SQLLogo, alt: "SQL Logo", name:"SQL", color: "text-[#00BDF2]" },
    ]

    const floatingAnimation = {
        x: [0, 8, -8, 0],
        y: [0, 8, -8, 0],
    }
    const handleHoverStart = (index: number) => {
        setLanguagesHovered(prevLanguages =>
          prevLanguages.map((lang, i) =>
            i === index ? { ...lang, hovered: true } : lang
          )
        );
      };


    

      
    
    
      
    const [languagesHovered, setLanguagesHovered] = useState(Array(languages.length).fill(false));
    const [displayedName, setDisplayedName] = useState("")
    const [displayedColor, setDisplayedColor] = useState("")
    type RepeatType = "loop" | "reverse" | "mirror";

const getRandomRepeatType = (): RepeatType => {
  const repeatTypes: RepeatType[] = ["loop", "reverse", "mirror"];
  return repeatTypes[Math.floor(Math.random() * repeatTypes.length)];
};

    const [reep, setReep] = useState(getRandomRepeatType)

    useEffect(() => {
        // Function to update repeatType
        const updateRepeatType = () => {
          setReep(getRandomRepeatType());
        };
    
        // Set interval to update repeatType every 5 seconds
        const intervalId = setInterval(updateRepeatType, 250);
    
        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
      }, []);


    useEffect(() => {
        for (let i = 0; i < languages.length; i++) {
          if (languagesHovered[i]) {
            setDisplayedName(languages[i].name);
            setDisplayedColor(languages[i].color);
          }
        }},[languagesHovered])

        

    return(
        <div className="w-full bg-white drop-shadow-xl p-10 flex justify-around items-baseline h-screen">
            <div className="flex flex-col items-center">
            <h2 className="font-black text-6xl flex mb-10">
                SK<h2 className="text-yellow-500">i</h2>LLS
            </h2>
            
            <motion.h3 className={`text-3xl font-semibold ${displayedColor}`}
            key={displayedName} // Use displayedName as key to trigger remounting
            initial={{ opacity: 0, x:-5 }}
            animate={{ opacity: 1 , x:0}}
            transition={{ duration: 1 }}
            >
                {displayedName}
            </motion.h3>
            </div>
            <motion.ul 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                className="flex justify-around grid grid-cols-3 gap-3 border-2 p-5 bg-stone-500/10 backdrop-blur-md"
            >
                {languages.map((language, index) => (
                    <motion.li 
                        key={index}
                        onHoverStart={() => handleHoverStart(index)}
                        onHoverEnd={() => setLanguagesHovered(prevLangugagesHovered => Array(languages.length).fill(false))}
                        animate={floatingAnimation}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 8, 
                            ease: "linear",
                            repeatType: reep,
                            delay: Math.random() * 4 // Adding random delay for staggered effect
                        }}
                        
                    >
                        <Image 
                        className="hover:scale-110 duration-2s"
                            src={language.src} 
                            alt={language.alt} 
                            width={64} 
                            height={64} 
                        />
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}
