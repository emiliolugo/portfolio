"use client"

import { Stalinist_One } from "next/font/google";
const stalinist_one = Stalinist_One({ subsets: ["latin"], weight: '400',variable: '--font-stalinist_one'});

export default function Intro(){
  
  return(
    <div className="h-screen p-10" >
      
      <h1 className={`text-white text-6xl mt-10 text-center md:text-start ${stalinist_one.className}`}>
        ABOUT
      </h1>
      <div className="flex flex-col md:flex-row">
      <p className="text-white mt-10 mx-5 w-full md:w-1/2 text-md">
        Hello there, I'm Emilio, a student and passionate software developer. 
        I love designing websites as much as I love working under the hood.
        It all started with a <span className="font-semibold">Space Invaders</span> clone I coded in scratch during my middle school years.
        Since then I have pursued education in tech, and have made countless projects of my own.
      </p>
      <p className="text-white mt-10 mx-5 w-full md:w-1/2 text-md">
        I am always down to have a quick coffee chat, or designing stuff for others. 
        Please contact me if you are interested in working with me, or if you simply just want to ask a question!
      </p></div>
    </div>
  )
}