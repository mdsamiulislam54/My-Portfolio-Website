"use client"
import React from 'react'
import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
    
  return (
    <nav className='py-4'>
        <div className="custom-container">
            <div className='flex justify-between items-center'>
                <div>
                    <h1>MD SHAMIUL ISLAM</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <Button>Download Resume</Button>
                    <Button><MenuIcon/></Button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar