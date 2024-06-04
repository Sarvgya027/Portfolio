import React from 'react'
import { SiGmail } from 'react-icons/si'

function Title({ text, className }: { text: string, className?: string }) {
  return (
    <div>
      <h1 className={`text-4xl font-bold ${className}`}>{text}
      </h1>

      <div className='w-full h-2 bg-[#4a5d5f] blur-[2px] rounded-full '></div>
      <div className='w-full h-2 bg-[#339989] blur-[2px] rounded-full translate-x-2'></div>
    </div>
  )
}

export default Title