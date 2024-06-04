import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Navbar({className}: {className?: string}) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/sarvgya-verma/",
      label: "LinkedIn",
      Icon: <BsLinkedin />
    },
    {
      link: "https://github.com/Sarvgya027",
      label: "Github",
      Icon: <BsGithub />
    }
  ]

  return (
    <nav className={cn('p-10 mb-5 flex justify-between items-center', className)}>
      <h1 className='text-xl font-bold underline underline-offset-8 decoration-[#339989] '>Sarvgya027</h1>
      <div className='flex items-center gap-7 text-2xl'>
        {socials.map((social) => (
          <Link
            className='hover:text-[#339989] transition-all duration-400 hover:scale-125  '
            href={social.link}
            key={social.label}
            aria-label={social.label}
          >
            {social.Icon}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar