"use client"
import { useState, useEffect } from 'react';
import { Projects } from "./components/Projects";
import { motion } from "framer-motion";
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Socials from './components/Socials';
import Skills from './components/Skills';


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
      
    >
    {!loading && 
    <>
    <Navbar />
    <Landing />
    <Socials />
    <Skills />
    </>}
      {loading ? 
      <div className="text-white flex-col flex items-center justify-center overflow-x-hidden w-400 h-400">
        <Loader /> Loading...</div> 
        
      : <div className='p-10'>
        <Projects />
        </div>}
    </main>
  );
}
