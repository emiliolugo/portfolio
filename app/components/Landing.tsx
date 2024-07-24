import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion"

export default function Landing(){
    return(
        <div className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400">
        <div className=" w-full p-10">
        </div>
        <div className="flex p-10">
            <div className="text-white">
            <h2 className="font-black text-2xl">Hello I am Emilio Lugo!</h2>
            <p>I am a student, computer engineer and web designer.</p>
            <div className=" mt-10 text-zinc-800">
                <motion.button className="bg-white rounded-md text-sm font-semibold p-2"
                whileHover={{scale: 1.1, rotate:5, }}
                whileTap={{scale: 0.9}}
                >
                    SEE MY PROJECTS!
                    </motion.button>
            </div>
            </div>
            <Image alt="Headshot image of Emilio Lugo" 
            src="/images/headshot.png" 
            width={128} height={128}
            />
        </div>
        </div>
    )
}