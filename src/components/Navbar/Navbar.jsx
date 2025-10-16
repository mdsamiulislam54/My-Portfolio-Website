"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'
import MenuIteam from './MenuIteam'
import { AnimatePresence, motion } from "motion/react"
import Logo from '../Logo/logo'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const menuRef = useRef(null);
  const pathname = usePathname();
  useEffect(() => {

    const handleScrollY = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScrollY);
    return () => window.removeEventListener('scroll', handleScrollY);
  }, [])
  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Window click handle করা
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside)
    } else {
      window.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])



  return (
    <nav className={`py-4   absolute inset-0 bg-transparent
      ${pathname === '/' ? scrollY > 50 ? "fixed-nav bg-white" : "" : scrollY > 50 ? "fixed-nav bg-white" : "bg-white"}
    `}>
      <div className="custom-container ">
        <div className='flex justify-between items-center'>
          <div>
            <Logo className={''} />
          </div>
          <div className='flex items-center gap-4'>
            
            <Button variant="outline" onClick={() => alert("Resume Downloaded!")}>
              Download Resume
            </Button>
            <Button variant="outline" ref={menuRef} onClick={handleToggleMenu} className={"cursor-pointer"}>
              <MenuIcon />
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: 600, }}
              exit={{ x: 600, }}
              animate={{ x: 0, opacity: 1 }}

              transition={{ duration: 0.8, ease: "easeInOut" }}
              className='fixed right-0 top-0 min-h-screen z-100  bg-white shadow-2xl dark:bg-black  p-4 lg:w-3/12 md:w-5/12 sm:w-7/12 w-10/12'
            >
              <MenuIteam onClose={handleToggleMenu} />
            </motion.div>
          )

          }
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
