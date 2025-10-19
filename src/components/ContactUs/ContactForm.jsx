"use client"
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from 'react-toastify'

const ContactForm = () => {
    const [error, setError] = useState('')

    const onSubmit = (e) => {
        
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const description = form.description.value;
        if (!name || !email || !subject || !description) {
            return toast.error("Please fill all required fields.")

        } else {
            toast.success(`${name} Form submitted successfully  🎉`)
            form.reset()
        }

    }
    return (
        <form onSubmit={onSubmit} className='space-y-4'>

            <div className='space-y-3'>
                <Label>Name</Label>
                <Input type="text" name="name" placeholder="Enter Your Name" className="border-yellow-500" />
            </div>
            <div className='space-y-3'>
                <Label>Name</Label>
                <Input type="email" name="email" placeholder="Enter Your Email" className="border-yellow-500" />
            </div>
            <div className='space-y-3'>
                <Label>Subject</Label>
                <Input type="text" name="subject" placeholder="Enter Your Email" className="border-yellow-500" />
            </div>

            <div className='space-y-3'>
                <Label>Subject</Label>
                <textarea type="text" rows={6} name="description" placeholder="Enter Your Email" className="border p-4 border-yellow-500 w-full" />
            </div>
            {
                error && <p className='text-yellow-500'>{error}</p>
            }

            <Button type="submit " className="button">Submit</Button>
        </form>
    )
}

export default ContactForm