"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, FolderOpenDotIcon, GitForkIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i:number) => {
      const delay = i * 0.2;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 1 }
        }
      };
    }
  };
  const projInfo = [
    {
      name: "SkywalkerStacks",
      image: "/images/SkywalkerStacks.png",
      github: "www.github.com",
      website: "skywalker-stacks.onrender.com",
      stack: ["flask ", "HTML ", "CSS ", "JS ", "SQL (sqlite3) "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-red-800 to-red-500"
    },
    {
      name: "ExolarSystem",
      image: "/images/SkywalkerStacks.png",
      github: "www.github.com",
      website: "skywalker-stacks.onrender.com",
      stack: ["flask ", "HTML ", "CSS ", "JS ", "SQL (sqlite3) "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-orange-700 to-orange-500"
    },
    {
      name: "MentalWhiz",
      image: "/images/mentalwhizla.png",
      github: "www.github.com",
      website: "mentalwhiz.vercel.app",
      stack: ["React.ts ", "TailwindCSS ", "Next.js "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-yellow-600 to-yellow-300"
    },
    {
      name: "Word Search Generator",
      image: "/images/wordsearch.png",
      github: "www.github.com",
      website: "mentalwhiz.vercel.app",
      stack: ["React.js ", "css "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-green-700 to-green-500"
    },
    {
      name: "CS50 series",
      image: "/images/wordsearch.png",
      github: "www.github.com",
      website: "mentalwhiz.vercel.app",
      stack: ["C ", "python ", "SQL ", "flask "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-blue-700 to-blue-500"
    },
    {
      name: "CS50ai series",
      image: "/images/wordsearch.png",
      github: "www.github.com",
      website: "mentalwhiz.vercel.app",
      stack: ["NumPy ", "Pomogranate ", "Python "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-purple-700 to-purple-500"
    }
  ];
  
  const [learnMoreHovered, setLearnMoreHovered] = useState(Array.from({ length: projInfo.length }, () => false));

  return (
    <div>
        <motion.div className="h-full w-full flex flex-col items-center justify-center pb-0">
            <div className="flex">
            <h2 className="text-yellow-500 text-center text-5xl font-black">
                PRO
            </h2>
            <h2 className=" text-center text-5xl font-black ">
                JECTS
            </h2>
            </div>
            <motion.svg
  width="200"
  height="40" // Adjust height to fit the content
  viewBox="0 0 220 40" // Adjust viewBox to include only the necessary space
  initial="hidden"
  animate="visible"
  style={{ display: 'block' }} // Ensure there's no extra space due to display settings
>
  <motion.line
    x1="220"
    y1="20" // Adjust y1 and y2 to center the line vertically
    x2="0"
    y2="20"
    strokeWidth="5"
    stroke="#EAB30A"
    variants={draw}
    custom={5}
  />
</motion.svg>

            
            
        </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 50 }}
      className=" grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 grid-gap-4"
      
    >
      {projInfo.map((project, index) => (
        <motion.div
  key={project.name}
  className={`p-4 shadow-yellow-500 hover:drop-shadow-xl `}
        whileHover={{y:-5}}
        whileDrag={{}}
        drag
        dragConstraints={{ left: 10, right: 10, top:10, bottom: 10 }}
        dragElastic={0.2}>
  
          <div className={`w-full p-4 rounded-md border-t-2 border-t-yellow-500 border-b-none bg-white text-stone-900 `}>
            <div className="text-start">
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="text-sm font-light text-stone-600">
                {project.stack}
              </p>
            </div>
            <motion.div className={`m-4 border-2 border-stone-500/10 drop-shadow-md rounded-xl`}
            >
              <Image
                className="rounded-xl"
                src={project.image}
                alt={`Image of ${project.name}`}
                width={300}
                height={100}
                objectFit="cover"
              />
            </motion.div>
            <div className="m-4">
                {project.description}
            </div>
            <motion.div className="flex items-center pr-4 pl-4">
              <motion.div className="flex gap-x-2">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <a
                    target="_blank"
                    href={project.github}
                    className="flex  p-2 rounded-xl"
                  >
                    <GitForkIcon />
                  </a>
                </motion.div>
                <motion.div className="w-full h-full" whileHover={{ scale: 1.1 }}>
                  <a
                    target="_blank"
                    href={project.website}
                    className="flex bg-white p-2 rounded-xl"
                  >
                    <GlobeIcon />
                  </a>
                </motion.div>
              </motion.div>
              <motion.button
                className="ml-auto  p-2 rounded-xl flex"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setLearnMoreHovered(prevLearnMoreHovered =>
                    prevLearnMoreHovered.map((hovered, i) => 
                      i === index ? true : false
                    )
                  )}
                  onHoverEnd={() => setLearnMoreHovered(prevLearnMoreHovered =>
                    prevLearnMoreHovered.map((hovered, i) => 
                      i === index ? !hovered : hovered
                    )
                  )}
                onClick={() => setIsVisible(!isVisible)}
              >
                <p>Learn More</p>
                <motion.div animate={{ rotate: learnMoreHovered[index] ? 90 : 0 }}>
                  <ChevronRightIcon />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
          <div>
          {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 15 }}
                exit={{ opacity: 0, height: -15 }}
                transition={{ duration: 0.3 }}
                className="p-5 mt-4 bg-indigo-500 text-white rounded-lg w-80"
              >
                <p className="text-wrap">{project.description}</p>
              </motion.div>
            )}
            </div>
        </motion.div>
      ))}
      
    </motion.div>
    </div>
    
  );
};
