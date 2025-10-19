"use client";
import { skillsData } from "@/lib/skillsData";
import React from "react";
import { motion } from "motion/react";

const Skills = () => {
    return (
        <section className="py-16  text-white scroll-smooth min-h-screen">
            <div className="custom-container text-center mb-16">
           

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            gap-8
            mx-auto
          "
                >
                    {skillsData.map((skill) => (
                        <motion.div
                            key={skill.id}

                            className="
                flex 
                flex-col 
                items-center 
                justify-center 
                bg-gray-900 
                rounded-2xl 
                p-6 
                shadow-md 
                hover:shadow-yellow-500/30 
                hover:rotate-[-2deg]
               cursor-pointer
                transition 
                duration-300 
                hover:scale-105
              "
                        >
                            <div className="mb-4 text-4xl">{skill.icon}</div>
                            <h3 className="text-lg md:text-xl font-semibold tracking-wide">{skill.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
