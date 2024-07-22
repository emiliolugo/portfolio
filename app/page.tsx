"use client"
import { useState, useEffect } from 'react';
import { Projects } from "./components/Projects";
import { motion } from "framer-motion";
import Loader from './components/Loader';
import Navbar from './components/Navbar';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    // Simulate a delay to show the loader
    const timer = setTimeout(() => {
      setTransitioning(true); // Start transition
      setTimeout(() => setLoading(false), 500); // Delay hiding content to show transition
    }, 2000); // 2 seconds delay, adjust as needed

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between transition-colors duration-500 ${transitioning ? 'bg-zinc-100' : 'bg-yellow-500'} overflow-x-hidden`}
    >
      {loading ? 
      <div className="text-white flex-col flex items-center justify-center overflow-x-hidden w-400 h-400">
        <Loader /> Loading...</div> 
        
      : <div className='p-10'>
        <Navbar />
        <Projects />
        </div>}
    </main>
  );
}
