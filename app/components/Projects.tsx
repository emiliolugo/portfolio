"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue
} from "framer-motion";
import { GitBranch, Globe } from "lucide-react";

import { Stalinist_One } from "next/font/google";
const stalinist_one = Stalinist_One({ subsets: ["latin"], weight: '400',variable: '--font-stalinist_one'});


export const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  

  

  const xFirstHalf = useTransform(scrollYProgress, [0, 1], [-250, 200]);
  const xSecondHalf = useTransform(scrollYProgress, [0, 1], [10, -200]);

  const projInfo = [
    {
      name: "MentalWhiz",
      image: "/images/mentalwhizla.png",
      github: "https://github.com/emiliolugo/mentalwhiz",
      website: "mentalwhiz.vercel.app",
      stack: ["React.ts ", "TailwindCSS ", "Next.js "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-yellow-600 to-yellow-300"
    },
  
    {
      name: "SkywalkerStacks",
      image: "/images/SkywalkerStacks.png",
      github: "www.github.com",
      website: "skywalker-stacks.onrender.com",
      stack: ["flask ", "HTML ", "CSS ", "JS ", "sqlite3 "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-red-800 to-red-500"
    },
    {
      name: "ExolarSystem",
      image: "/images/exolarsystem.png",
      github: "www.github.com",
      website: null,
      stack: ["flask ", "HTML ", "CSS ", "JS ", "sqlite3 "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-orange-700 to-orange-500"
    },
    {
      name: "MentalWhiz",
      image: "/images/mentalwhizla.png",
      github: "https://github.com/emiliolugo/mentalwhiz",
      website: "mentalwhiz.vercel.app",
      stack: ["React.ts ", "TailwindCSS ", "Next.js "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-yellow-600 to-yellow-300"
    },
    {
      name: "Word Search Generator",
      image: "/images/wordsearch.png",
      github: "https://github.com/emiliolugo/wordsearch",
      website: "mentalwhiz.vercel.app",
      stack: ["React.js ", "css "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-green-700 to-green-500"
    },
    {
      name: "CS50 series",
      image: "/images/cs50.png",
      github: "https://github.com/me50/emiliolugo/tree/main",
      website: null,
      stack: ["C ", "python ", "SQL ", "flask "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-blue-700 to-blue-500"
    },
    {
      name: "CS50ai series",
      image: "/images/CS50AI_pll.png",
      github: "https://github.com/me50/emiliolugo/tree/main",
      website: null,
      stack: ["NumPy ", "Pomogranate ", "Python "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-purple-700 to-purple-500"
    },
    {
      name: "Word Search Generator",
      image: "/images/wordsearch.png",
      github: "https://github.com/emiliolugo/wordsearch",
      website: "mentalwhiz.vercel.app",
      stack: ["React.js ", "css "],
      description: "A website to help users track their star wars legos",
      color: "bg-gradient-to-r from-green-700 to-green-500"
    },
  ];

  const smallProjInfo = projInfo.slice(1, -1);
  const firstHalf = projInfo.slice(0, Math.ceil(projInfo.length / 2));
  const secondHalf = projInfo.slice(Math.ceil(projInfo.length / 2));
  const [isMdOrHigher, setIsMdOrHigher] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrHigher(window.innerWidth >= 768); // 768px is the default `md` breakpoint in Tailwind CSS
    };

    // Call the function on initial render
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={ref} className="md:p-12 bg-[#132156] md:h-[100vh] h-[150vh] md:relative md:w-[120vw] overflow-x-hidden  ">
      <div className="lg:text-6xl text-4xl text-center md:text-start text-white font-bold mb-10 md:tracking-wide">
        <h1 className={`box-shadow-xl shadow-white ${stalinist_one.className}`}>
          <span className="text-yellow-500">PRO</span>
          JECTS
        </h1>
      </div>
      {isMdOrHigher ? (
      <>
      <div className="flex gap-x-1 grid grid-cols-2 md:grid-cols-4">
        {firstHalf.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-white justify-center w-full max-w-3xl"
            style={{ x: xFirstHalf }}
          >
            <motion.div
              className="relative rounded-lg mt-5 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <Image
                src={project.image}
                width={500}
                height={100}
                alt={project.name}
                className="rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-blue-800 opacity-0 p-2 flex flex-col items-center"
                whileHover={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-center font-black lg:text-xl">
                  {project.name}
                </h1>
                <p className="lg:block hidden mx-5">{project.description}</p>
                <motion.div className="mt-auto text-xs lg:text-lg flex mr-auto ml-4 gap-x-2">
                  {project.stack.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="rounded-full bg-white/10 p-2"
                    >
                      <p className="text-green-400 font-semibold">{tech}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div className="text-md flex lg:self-start gap-x-2 p-3">
                  {project.website && <a
                    href={`https://${project.website}`}
                    target="__blank"
                    rel="noopener"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2, y: -2 }}
                      className="flex rounded-lg bg-white/10 p-1"
                    >
                      <Globe className="lg:p-1 lg:mr-1" />{" "}
                      <p className="hidden lg:block font-bold">LIVE</p>
                    </motion.button>
                  </a>}
                  <a
                    href={`https://${project.github}`}
                    target="__blank"
                    rel="noopener"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2, y: -2 }}
                      className="flex rounded-lg bg-white/10 p-1"
                    >
                      <GitBranch className="lg:p-1 lg:mr-1" />{" "}
                      <p className="hidden lg:block font-bold">CODE</p>
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
  
      <div className="flex gap-x-1 grid grid-cols-2 md:grid-cols-4">
        {secondHalf.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-white justify-center w-full max-w-3xl"
            style={{ x: xSecondHalf }}
          >
            <motion.div
              className="relative rounded-lg mt-5 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <Image
                src={project.image}
                width={500}
                height={100}
                alt={project.name}
                className="rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-blue-800 opacity-0 p-2 flex flex-col items-center"
                whileHover={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-center font-black lg:text-xl">
                  {project.name}
                </h1>
                <p className="lg:block hidden mx-5">{project.description}</p>
                <motion.div className="mt-auto text-xs lg:text-lg flex mr-auto ml-4 gap-x-2">
                  {project.stack.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="rounded-full bg-white/10 p-2"
                    >
                      <p className="text-green-400 font-semibold">{tech}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div className="text-md flex lg:self-start gap-x-2 p-3">
                {project.website && <a
                    href={`https://${project.website}`}
                    target="__blank"
                    rel="noopener"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2, y: -2 }}
                      className="flex rounded-lg bg-white/10 p-1"
                    >
                      <Globe className="lg:p-1 lg:mr-1" />{" "}
                      <p className="hidden lg:block font-bold">LIVE</p>
                    </motion.button>
                  </a>}
                  <a
                    href={`https://${project.github}`}
                    target="__blank"
                    rel="noopener"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2, y: -2 }}
                      className="flex rounded-lg bg-white/10 p-1"
                    >
                      <GitBranch className="lg:p-1 lg:mr-1" />{" "}
                      <p className="hidden lg:block font-bold">CODE</p>
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>) :(
        <div>
          {smallProjInfo.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-white justify-center w-full md:max-w-3xl"
          >
            <motion.div
              className="relative rounded-lg mt-5 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <Image
                src={project.image}
                width={300}
                height={80}
                alt={project.name}
                className="rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-blue-800 opacity-0 p-2 flex flex-col items-center"
                whileHover={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-center font-black lg:text-xl">
                  {project.name}
                </h1>
                <p className="lg:block hidden mx-5">{project.description}</p>
                <motion.div className="mt-auto text-xs lg:text-lg flex mr-auto ml-4 gap-x-2">
                  {project.stack.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="rounded-full bg-white/10 p-2"
                    >
                      <p className="text-green-400 font-semibold">{tech}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div className="text-md flex lg:self-start gap-x-2 p-3">
                {project.website && <a
                    href={`https://${project.website}`}
                    target="__blank"
                    rel="noopener"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2, y: -2 }}
                      className="flex rounded-lg bg-white/10 p-1"
                    >
                      <Globe className="lg:p-1 lg:mr-1" />{" "}
                      <p className="hidden lg:block font-bold">LIVE</p>
                    </motion.button>
                  </a>}
                  <a
                    href={`https://${project.github}`}
                    target="__blank"
                    rel="noopener"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2, y: -2 }}
                      className="flex rounded-lg bg-white/10 p-1"
                    >
                      <GitBranch className="lg:p-1 lg:mr-1" />{" "}
                      <p className="hidden lg:block font-bold">CODE</p>
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
        </div>

      )}
    </div>
  );
};
