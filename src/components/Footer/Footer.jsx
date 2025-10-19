"use client"
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaDiscord } from "react-icons/fa";

const Footer = () => {
    const socials = [
        {
            name: "LinkedIn",
            icon: <FaLinkedin size={20} className="" />,
            link: "https://www.linkedin.com/in/mdshamiulislam-dev/"

        },
        { name: "GitHub", icon: <FaGithub size={20} className="text-gray-300" />, link: "https://github.com/mdsamiulislam54" },
        { name: "Facebook", icon: <FaFacebook size={20} className="text-gray-100" />, link: "https://www.facebook.com/mdsamiulislam2004" },
        { name: "Discord", icon: <FaDiscord size={20} className="" />, link: "https://discord.com/users/1310831175677382697" },
    ];
    return (
        <footer className="bg-gradient-to-bl to-gray-800 from-black border-t border-gray-700 text-white ">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h1 className="text-xl font-bold">Md. Shamiul Islam</h1>
                    <p className="text-sm text-gray-400">Frontend Developer | Portfolio</p>
                </div>

                <div className=" flex max-sm:justify-center gap-4 py-10">
                    {socials.map((social, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Link href={social.link} target='_blank' className="p-2 cursor-pointer rounded-xl bg-gray-100 dark:bg-gray-800 hover:scale-105 transition hover:-rotate-3 button">
                                {social.icon}
                            </Link>

                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center mt-6 text-gray-200 text-sm pb-4">
                &copy; {new Date().getFullYear()} Md. Shamiul Islam. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
