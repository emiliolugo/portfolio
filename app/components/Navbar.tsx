import { color, motion } from "framer-motion";
import Image from "next/image";
import { Foldit } from "next/font/google";
import { MailIcon, MouseIcon, ScrollTextIcon } from "lucide-react";
import { Stalinist_One } from "next/font/google";
const stalinist_one = Stalinist_One({ subsets: ["latin"], weight: '400',variable: '--font-stalinist_one'});
export default function LandingPage() {
  

  return (
    <div className="h-screen first-section flex flex-col justify-center ">
    <div className="md:flex text-white p-8">
      {/* Vertical and Horizontal Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Left Vertical Line */}
        <motion.div
          className="absolute bottom-7 left-5 bg-white rounded-full"
          initial={{ height: 0 }}
          animate={{ height: "20vh" }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={{ width: "1px" }}
        />
        {/* Right Vertical Line */}
        <motion.div
          className="absolute top-7 right-5 bg-white rounded-full"
          initial={{ height: 0 }}
          animate={{ height: "20vh" }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={{ width: "1px" }}
        />
        {/* Top Horizontal Line */}
        <motion.div
          className="absolute top-5 right-7 bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "20vh" }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={{ height: "1px" }}
        />
        {/* Bottom Horizontal Line */}
        <motion.div
          className="absolute bottom-5 left-7 bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "20vh" }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={{ height: "1px" }}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center  h-full w-full p-10">
        {/* Left Side: Text */}
        <div className="md:w-1/2 w-full flex flex-col justify-center self-center space-y-2 p-4">
          <motion.div
            className="text-sm font-light font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello there, I&apos;m
          </motion.div>
          <motion.div
            className="md:text-5xl text-3xl -ml-1 md:w-full w-[100vw] lg:text-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className={`group ${stalinist_one.className}`}>
              <span>E</span>
              <span className="group-hover:text-[#F6721F] duration-500">M</span>
              <span>I</span>
              <span>L</span>
              <span>I</span>
              <span>O</span>
              <span> </span>
              <span>L</span>
              <span>U</span>
              <span>G</span>
              <span className="group-hover:text-[#F6721F] duration-500 delay-200">O</span>
            </h1>
          </motion.div>
          
            
            
          
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="md:w-1/2 w-full flex justify-center items-center ">
      <div className="shape md:block hidden">
        <div className="bd">
          
          <Image className=" mt-30 ml-2" src={'/images/headshot.png'} height={275} width={275} alt="Headshot Image of Me" />
        </div>
      </div>
     </div>
  </div>
  </div>
  <div >
  <motion.div className="flex gap-x-2 px-20 mx-1 mb-10">
            <button className="rounded-xl border-2 p-3 hover:bg-white hover:text-black duration-500 text-white">
            <a href="/resume-dm.pdf" target="_blank" rel="noopener">
              <div className="flex gap-x-1">
                
              <ScrollTextIcon className="hidden md:block"/>
              Resume
              </div></a>
            </button>
            <button className="rounded-xl border-2 border-[#F6721F] p-3 hover:bg-transparent hover:text-white bg-[#F6721F] hover:text-[#F6721F] duration-500">
              <a href="mailto:emilio23lugo@gmail.com" target="_blank" rel="noopener" >
              <div className="flex gap-x-1">
            <MailIcon className="hidden md:block"/>
              Contact</div></a>
            </button>
          </motion.div>
          <div className="flex items-end justify-center">
    <span>
    <MouseIcon className="absolute inline-flex  text-white"/>
    <MouseIcon className="relative inline-flex animate-ping 1s text-white"/>
    </span>
    </div>
  </div>
        </div>
    
  );
}
