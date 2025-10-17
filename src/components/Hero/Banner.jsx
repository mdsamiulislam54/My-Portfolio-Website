"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Hand } from 'lucide-react'
import { Database } from "lucide-react";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { motion } from "motion/react";
const Banner = () => {
    const skills = [
        { name: "JavaScript", icon: <IoLogoJavascript size={32} /> },
        { name: "React.js", icon: <FaReact size={32} /> },
        { name: "Next.js", icon: <RiNextjsLine size={32} /> },
        { name: "TypeScript", icon: <TbBrandTypescript size={32} /> },
        { name: "Node.js", icon: <IoLogoNodejs size={32} /> },
        { name: "Express.js", icon: <SiExpress size={32} /> },
        { name: "MongoDB", icon: <Database size={32} /> },
    ];
    return (
        <section className="min-h-screen flex justify-center items-center px-4 mt-16 ">
            <div className="custom-container flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">

                {/* Left Side (Text) */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}

                    className="flex-1 text-center md:text-left space-y-4">
                    <p className="text-sm font-bold tracking-wider syne sm:text-base text-gray-300 dark:text-gray-300 flex gap-2 justify-center md:justify-start">Hello, I'm <Hand className='text-yellow-500' /></p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl syne font-bold leading-[70px] text-white dark:text-white">
                        Md Shamiul Islam
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold syne">
                        <span className='text-yellow-500'>Frontend Web Developer </span>| Bangladesh
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400 leading-relaxed syne">
                        Passionate Frontend Web Developer skilled in JavaScript and the React.js ecosystem. Experienced in the MERN stack and
                        building performance, user-centric web applications. Eager to contribute to impactful projects in a collaborative team while
                        continuously enhancing my technical and problem-solving abilities.
                    </p>

                    <div className='syne flex gap-5 items-center max-md:justify-center my-4'>
                        <Button variant="outline">Let's Talk <ArrowUpRight /></Button>
                        <Button variant="outline">My Work <ArrowUpRight /></Button>
                    </div>

                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6 text-center py-10">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="p-2 cursor-pointer rounded-xl bg-gray-100 dark:bg-gray-800 hover:scale-105 transition">
                                    {skill.icon}
                                </div>

                            </div>
                        ))}
                    </div> <div>

                    </div>
                </motion.div>

                {/* Right Side (Image) */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-1 relative   ">
                    <Image
                        src="https://i.postimg.cc/sDLX8kdk/profile-1.png"
                        width={400}
                        height={400}
                        alt="profile image"

                        className=" w-72 h-72 md:w-[600px] md:h-[600px] object-cover  "
                    />

                    <div className='absolute w-[250px] h-[250px]  md:w-[400px]  md:h-[400px]  bg-yellow-600/30 rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  blur-3xl z-[-1] '></div>
                </motion.div>
            </div>
        </section>
    )
}

export default Banner
