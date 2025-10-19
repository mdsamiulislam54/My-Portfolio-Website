"use client"
import { projects } from '@/lib/projects'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from "motion/react";
const Projects = () => {
    return (
        <div className='py-16'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, }}
                className="custom-container">

                <div className=" space-y-30"


                >
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col lg:flex-row  gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Section */}
                            <div className="lg:w-[50%] ">
                                <Image
                                    width={500}
                                    height={500}
                                    src={project.image}
                                    alt={project.projectName}
                                    className="rounded-sm shadow-lg w-full  "
                                />
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 space-y-3 syne">
                                <h2 className="text-2xl font-semibold">{project.projectName}</h2>
                                <p className="text-gray-100 tracking-wide text-md">{project.overview}</p>

                                <ul className="list-disc list-inside text-gray-100">
                                    {project.features.map((feature, i) => (
                                        <li className='text-xs tracking-wide line-clamp-1 flex items-center gap-2' key={i}><Star size={8} color='gold' />{feature}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1   bg-gray-800 text-sm rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="sm:flex  gap-4 mt-4">
                                    <Link
                                        href={project.links.liveSite}
                                        target="_blank"
                                        className="px-4 py-2 button text-white rounded-md flex items-center max-sm:justify-between max-sm:mb-2 gap-2 "
                                    >
                                        Live Site  <ArrowUpRight />
                                    </Link>
                                    <Link
                                        href={project.links.clientRepo}
                                        target="_blank"
                                        className="px-4 py-2 button text-white rounded-md flex items-center max-sm:justify-between max-sm:mb-2 gap-2 "
                                    >
                                        Client Repo <ArrowUpRight />
                                    </Link>
                                    <Link
                                        href={project.links.serverRepo}
                                        target="_blank"
                                        className="px-4 py-2 button text-white rounded-md flex items-center max-sm:justify-between max-sm:mb-2 gap-2 "
                                    >
                                        Server Repo <ArrowUpRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </motion.div>
        </div>
    )
}

export default Projects