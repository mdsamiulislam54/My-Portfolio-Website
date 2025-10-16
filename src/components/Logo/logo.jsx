import { SquareCode } from 'lucide-react'
import React from 'react'

const Logo = ({className}) => {
    return (
        <h1 className={`syne text-2xl font-bold leading-6 flex items-center gap-1 ${className}  `}>
           <SquareCode className='text-[#ffb646]'/>SHAMIUL
        </h1>
    )
}

export default Logo