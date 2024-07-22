import { LinkedinIcon, MailIcon } from "lucide-react";

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
        <div className="fixed bottom-0 left-0 p-4 space-y-4">
            {socials.map((social) => (
                <div key={social.name} className="flex flex-col">
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <img className="w-8 h-8" src={social.image} alt={social.name} />
                    </a>
                </div>
            ))}
        </div>
    );
}
