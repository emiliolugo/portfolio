"use client"
import { useState, useEffect } from 'react';
import { Projects } from "./components/Projects";
import { motion, AnimatePresence } from "framer-motion";
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import ContactPage from './components/Contact';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitioning(true); // Start transition
      setTimeout(() => setLoading(false), 500); // Delay hiding content to show transition
    }, 2000); // 2 seconds delay, adjust as needed

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='bg-[#132156]'>
      <AnimatePresence>
        {loading ? (
          <div className="text-white flex-col flex items-center justify-center overflow-x-hidden h-screen">
            <Loader />
            <p className='mt-auto ml-auto p-10 flex items-end'>
              Preparing your experience &nbsp;
              <span className="loading loading-dots loading-xs mt-2"></span>
            </p>
          </div>
        ) : (
          
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5, duration: 1 }}
              
            >
              <Navbar />
              <Intro />
              <Projects />
              <Skills />
              <ContactPage />
            </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
