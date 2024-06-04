import React from 'react'
import { SiNextdotjs, SiSupabase, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from './ui/direction-aware-hover'

function Projects() {
  const projects = [
    {
      title: "Project 1",
      tech: [SiNextdotjs, SiSupabase, SiTailwindcss],
      link: "https://nextjs.org/",
      cover: "/ProjectImages/project1.png",
      background: "bg-[#7DE2D1]"
    },
    {
      title: "Project 1",
      tech: [SiNextdotjs, SiSupabase, SiTailwindcss],
      link: "https://nextjs.org/",
      cover: "",
      background: "bg-[#7DE2D1]"
    },
    {
      title: "Project 1",
      tech: [SiNextdotjs, SiSupabase, SiTailwindcss],
      link: "https://nextjs.org/",
      cover: "",
      background: "bg-[#7DE2D1]"
    },
    {
      title: "Project 1",
      tech: [SiNextdotjs, SiSupabase, SiTailwindcss],
      link: "https://nextjs.org/",
      cover: "",
      background: "bg-[#7DE2D1]"
    },
  ]
  return (
    <div className='py-10 p-5 sm:p-0'>
      <div className='flex items-center justify-center'>
      <Title text="Projects" className='' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project, index) => {
          return <Link key={index} href={project.link}>
            <div className={cn("p-5 rounded-md", project.background)}>
              <DirectionAwareHover className='w-full space-y-5 cursor-pointer' imageUrl={project.cover}>
                <div className='space-y-5'>
 
                <h1 className='text-2xl font-bold'>{project.title}</h1>
                <div className='flex items-center justify-center gap-5'>{project.tech.map((Icon, index) => <Icon key={index} className='w-10 h-10' />) }</div>
                </div>
              </DirectionAwareHover>
              
            </div>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Projects