"use client"
import Image from 'next/image'
import React from 'react'
import ContactImages from '../../media/Mobile user-pana.svg'
import { MailOpen } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import { SendHorizontal } from 'lucide-react'
import ContactForm from '@/components/ContactUs/ContactForm'
import { motion } from "motion/react";
const ContactUs = () => {
    return (
        <div className=' py-16'>
            <div className="custom-container">

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, }}
                    className='grid md:grid-cols-2 '>
                    <div>
                        <div className='sm:flex gap-4 mb-8 max-sm:space-y-4 '>
                            <div className='flex items-center gap-4 bg-gray-900 p-4 syne '>
                                <MailOpen />
                                <div className='flex flex-col gap-2'>

                                    <p>mdshamiul.dev@gmail.com</p>

                                </div>
                            </div>
                            <div className='flex items-center gap-4 bg-gray-900 p-4 '>
                                <SiWhatsapp size={24} />
                                <div className='flex flex-col gap-2'>

                                    <p>+880-1612086842</p>

                                </div>
                            </div>
                        </div>

                        <div className='syne '>
                            <h4 className='flex items-center gap-2 text-xl tracking-wide mb-4'>Send Message <SendHorizontal size={20} /></h4>

                            <div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={ContactImages} width={100} height={100} alt='contact images'
                            className='w-full h-full'
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ContactUs