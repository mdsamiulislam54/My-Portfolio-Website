import Link from 'next/link'
import React from 'react'
import { Home, User, Briefcase, Book, Code, Mail, FileText } from 'lucide-react'
import { X } from 'lucide-react'
import Logo from '../Logo/logo'
import { Button } from '../ui/button'

const MenuIteam = ({ onClose }) => {
  return (
    <div className="mt-2 p-6">
      <div className='flex justify-between items-center my-10'>
        <Logo />
        <Button variant="outline" >
          <X />
        </Button>
      </div>
      <ul className="flex flex-col gap-8 syne">
        <li className="flex items-center gap-4 text-xl font-bold tracking-wider leading-8">
          <Home size={18} />
          <Link href={"/"}>Home</Link>
        </li>
        <li className="flex items-center gap-4 text-xl font-bold tracking-wider leading-8">
          <User size={18} />
          <Link href={"/aboutUs"}>About Us</Link>
        </li>
        <li className="flex items-center gap-4 text-xl font-bold tracking-wider leading-8">
          <Code size={18} />
          <Link href={"/skills"}>Skill</Link>
        </li>
        <li className="flex items-center gap-4 text-xl font-bold tracking-wider leading-8">
          <Briefcase size={18} />
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li className="flex items-center gap-4 text-xl font-bold tracking-wider leading-8">
          <Book size={18} />
          <Link href={"/education"}>Education</Link>
        </li>

        <li className="flex items-center gap-4 text-xl font-bold tracking-wider leading-8">
          <Mail size={18} />
          <Link href={"#"}>Contact Us</Link>
        </li>
        <li className="flex items-center gap-4 text-xl font-bold tracking-wider leading-8">
          <FileText size={18} />
          <Link href={"#"}>My Blogs</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuIteam
