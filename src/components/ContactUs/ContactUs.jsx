"use client"
import Image from 'next/image'
import React from 'react'
import ContactImages from '../../media/Mobile user-pana.svg'
import { MailOpen } from 'lucide-react'
import { Phone } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import { Send } from 'lucide-react'
import { SendHorizontal } from 'lucide-react'
import ContactForm from './ContactForm'
const ContactUs = () => {
    return (
        <div id='#contact'>
            <div className="custom-container">
                <h2 className="text-3xl md:text-5xl font-bold syne tracking-wide mb-8 text-yellow-500">
                    Contact Us
                </h2>
                <div className='grid md:grid-cols-2 '>
                    <div>
                        <div className='flex gap-4 mb-8 '>
                            <div className='flex items-center gap-4 bg-gray-900 p-4 syne '>
                                <MailOpen />
                                <div className='flex flex-col gap-2'>
                                   
                                    <p>mdshamiul.dev@gmail.com</p>

                                </div>
                            </div>
                            <div className='flex items-center gap-4 bg-gray-900 p-4 '>
                                <SiWhatsapp  size={24}/>
                                <div className='flex flex-col gap-2'>
                                   
                                    <p>+880-1612086842</p>

                                </div>
                            </div>
                        </div>

                        <div className='syne '>
                            <h4 className='flex items-center gap-2 text-xl tracking-wide mb-4'>Send Message <SendHorizontal size={20}/></h4>

                            <div>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={ContactImages} width={100} height={100} alt='contact images'
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs