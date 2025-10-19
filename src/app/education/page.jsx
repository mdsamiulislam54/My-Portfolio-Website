"use client";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
export default function EducationCards() {
    const cards = [
        {
            id: 1,
            title: "General Education",
            subtitle: "Diploma in Computer Technology",
            organization: "Shariatpur Polytechnic Institute",
            period: "2020 — 2024",
            description:
                "Completed Diploma in Computer Technology with a focus on software development, data structures, and computer networks. Graduated with practical project experience and strong problem-solving skills.",
            cta: "View Certificate",
            icon: "/icons/education.svg",
            certificate: "https://drive.google.com/file/d/1gHSuX_rQdqBMjkfLtPOHD8vf8-aV1l4C/view?usp=sharing"
        },
        {
            id: 2,
            title: "Courses",
            subtitle: "Complete Web Development",
            organization: "Programming Hero | Banani, Dhaka |",
            period: "Jan 2025 – Jun 2025",
            description: "Completed the Complete Web Development course by Programming Hero, focusing on real-world web design and development skills. Learned front-end technologies like HTML, CSS, Tailwind CSS, JavaScript, and React.js. Built multiple responsive projects and improved hands-on problem-solving abilities.",
            cta: "View Certificate",
            icon: "/icons/course.svg",
            certificate: "https://drive.google.com/file/d/1QMt2bEjYe19AGWMi8iDtc-lTnBedQ4Bz/view?usp=sharing"
        },
        {
            id: 3,
            title: "Training",
            subtitle: "Industrial Attachment — Professional Web Design",
            organization: "Creative IT Institute | Dhanmondi, Dhaka- 1205 ",
            period: "3 Months — 2024",
            description:
                "Hands-on industrial training focused on real-world web design and development workflows. Participated in end-to-end project cycles: design, implementation, testing, and deployment.",
            cta: "View Certificate",
            icon: "/icons/training.svg",
            certificate: ""
        },
    ];

    return (
        <section className=" custom-container py-16">


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                    <article
                        key={card.id}
                        className="flex flex-col bg-gradient-to-bt to-gray-800 from-black backdrop-blur-sm  shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-r border-yellow-500"
                    >
                        {/* Icon */}
                        <div className="mb-4 flex items-center justify-center">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700">
                                <GraduationCap color="gold" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center">
                            <h4 className="text-xl font-semibold mb-1">{card.title}</h4>
                            <p className="text-sm text-gray-200">
                                <span className="font-medium">{card.subtitle}</span>
                            </p>
                            <p className="text-xs text-gray-200 mt-1">{card.organization}</p>
                            <p className="text-xs text-gray-200 mt-1">{card.period}</p>

                            <p className="mt-4 text-gray-200 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>

                        {/* CTA */}
                        <Button className="mt-6 flex justify-center">
                            <Link
                                href={card.certificate}
                                target="_blank"
                                className="button px-2 py-2 rounded-md border border-gray-900"
                            >
                                {card.cta}
                            </Link>
                        </Button>
                    </article>
                ))}
            </motion.div>
        </section>
    );
}