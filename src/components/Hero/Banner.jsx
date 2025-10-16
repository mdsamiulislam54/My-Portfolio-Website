"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Hand } from 'lucide-react'

const Banner = () => {
    return (
        <section className="min-h-screen flex justify-center items-center px-4 ">
            <div className="custom-container flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">

                {/* Left Side (Text) */}
                <div className="flex-1 text-center md:text-left space-y-4">
                    <p className="text-sm font-bold tracking-wider syne sm:text-base text-gray-300 dark:text-gray-300 flex gap-2">Hello, I'm <Hand /></p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl syne font-bold leading-[70px] text-white dark:text-white">
                        Md Shamiul Islam
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-500 syne">
                        Frontend Web Developer | Bangladesh
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400 leading-relaxed syne">
                        Passionate Frontend Web Developer skilled in JavaScript and the React.js ecosystem. Experienced in the MERN stack and
                        building performance, user-centric web applications. Eager to contribute to impactful projects in a collaborative team while
                        continuously enhancing my technical and problem-solving abilities.
                    </p>

                    <div className='syne flex gap-5 items-center'>
                        <Button variant="outline">Let's Talk <ArrowUpRight/></Button>
                        <Button variant="outline">My Work <ArrowUpRight/></Button>
                    </div>
                </div>

                {/* Right Side (Image) */}
                <div className="flex-1 flex justify-end items-end relative  overflow-hidden">
                    <Image
                        src="https://i.postimg.cc/sDLX8kdk/profile-1.png"
                        width={400}
                        height={400}
                        alt="profile image"

                        className="  rounded-full w-60 h-60 sm:w-72 sm:h-72 md:w-[600px] md:h-[600px] object-cover  "
                    />

                   
                </div>
            </div>
        </section>
    )
}

export default Banner
