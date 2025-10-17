"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
const AboutUs = () => {
    return (
        <section className="py-16 min-h-screen">
            <div className="custom-container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-4">

                {/* Left Side (Image Section) */}
                <div className="relative flex-1 flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false,}}
                        className="relative">
                        <Image
                            src="https://i.postimg.cc/PfYSr7qW/AboutUs.png"
                            width={450}
                            height={450}
                            alt="About Us Profile Image"
                            className=" object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-[600px] md:h-[600px]"
                        />
                        {/* Background Glow */}
                        <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-yellow-600/30 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    {/* Button below image (centered on mobile) */}

                </div>

                {/* Right Side (Text Section) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false,}}
                    className="flex-1 text-center md:text-left space-y-5">
                    <h2 className="text-xl font-bold text-yellow-500 tracking-wider uppercase">
                        Get to Know Me
                    </h2>

                    <article className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide syne text-lg">
                        <p>
                            Hello! I’m <span className="font-semibold">Md. Shamiul Islam</span>,
                            a Frontend Web Developer from the CSE department of Shariatpur Polytechnic Institute.
                            My journey began in 2022 when a teacher first introduced me to HTML and CSS.
                            Seeing my first webpage live on the browser was a moment I’ll never forget — it inspired me to keep building for the web.
                        </p>

                        <p>
                            Initially, I was unsure whether to pursue software or web development,
                            but I chose web and stuck with it. Between 2023 and 2024, I taught myself
                            while finishing my diploma. Later, I joined a 3-month React Developer
                            training at Creative IT Institute and completed my Diploma in Computer
                            Science in December 2024. In July 2025, I successfully finished the Programming Hero Web Development course.
                        </p>

                        <p>
                            What started as curiosity turned into passion — I love writing code,
                            solving problems, and exploring new technologies. Outside of coding,
                            I enjoy playing cricket and keeping up with the latest tech trends.
                            I’m introverted by nature but love meaningful conversations.
                            Currently, I work as a Web Developer, handling both frontend and backend tasks with dedication.
                        </p>
                    </article>

                    <div className="flex justify-end mt-4">
                        <Button variant="outline">Let's Talk <ArrowUpRight /></Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
