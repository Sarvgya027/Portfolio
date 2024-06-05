import Link from 'next/link';
import React from 'react'
import { SiGmail } from "react-icons/si";

import { MovingBorderBtn } from './ui/moving-border';

function HeroSection() {
  return (
    <div className='w-[94%] min-h-[60vh] max-md:text-md lg:flex-row flex-col-reverse lg:gap-0 gap-14 mx-auto flex items-center justify-between '>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-5xl font-bold'>
          Hi, I&apos;m <span className='bg-gradient-to-r from-[#DCE1DE] to-[#339989] bg-clip-text text-transparent'>Sarvgya Verma</span>,<br /> I am a{' '}
          <span className='bg-gradient-to-r from-[#DCE1DE] to-[#339989] bg-clip-text text-transparent'>
            Full-Stack
          </span>{' '}
          Developer
        </h1>
        <p className='md:w-96 text-[#EFF9F0]'>Based in India, I am passionate about building FullStack web applications</p>
        <Link className='inline-block' href={"mailto:sarvgyaverma027@gmail.com"}>
          <div className='flex flex-row items-center justify-center gap-4 hover:scale-105 hover:text-[#339989] transition-all duration-400'>
            <h1 className='text-2xl font-bold '>Contact Me</h1>
            <SiGmail className='h-6 w-6' />
          </div>
          <div className='w-full h-2 bg-[#4a5d5f] blur-[2px] rounded-full '></div>
          <div className='w-full h-2 bg-[#339989] blur-[2px] rounded-full translate-x-2'></div>
        </Link>
      </div>
      <div className='relative'>
        <div className='w-72 h-72 space-y-3 -rotate-[30deg]'>
          <div className='flex gap-3 translate-x-8'>
            <div className='w-32 h-32 rounded-2xl blur bg-[#7DE2D1]'></div>
            <div className='w-32 h-32 rounded-full blur bg-[#339989]'></div>
          </div>
          <div className='flex gap-3 -translate-x-8'>
            <div className='w-32 h-32 rounded-2xl blur bg-[#4a5d5f]'></div>
            <div className='w-32 h-32 rounded-full blur bg-[#DCE1DE]'></div>
          </div>
        </div>
        <div className='glow absolute top-[50%] right-1/2  '>

        </div>
        <div className='absolute bottom-5 sm:bottom-14 max-sm:translate-x-1/2 left-0 sm:left-10'>
          <MovingBorderBtn borderRadius='1.75rem className="absolute'>
            <p>Available For Work</p>
          </MovingBorderBtn>
        </div>
      </div>

    </div>
  )
}

export default HeroSection;