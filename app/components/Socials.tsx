import { LinkedinIcon, MailIcon } from "lucide-react";
import { motion } from "framer-motion"
export default function Socials() {
    const socials = [
        {
            name: "LinkedIn",
            image: "/images/linkedin.png",
            href: "https://www.linkedin.com/in/emilio23lugo",
        },
        {
            name: "GitHub",
            image: "/images/git.png",
            href: "https://github.com/emiliolugo",
        },
        
    ];

    return (
        <div className="flex gap-x-4">
            {socials.map((social) => (
                <motion.div key={social.name} className="flex hover:drop-shadow-xl filter invert"
                whileHover={{ scale: 1.1 }}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <img className="w-8 h-8" src={social.image} alt={social.name} />
                    </a>
                </motion.div>
            ))}
            <motion.div className="flex hover:drop-shadow-xl bg-white rounded-full p-1"
                whileHover={{ scale: 1.1 }}>
                    <a href="mailto:emilio23lugo@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <MailIcon className="text-black" />
                    </a>
                </motion.div>
        </div>
    );
}
