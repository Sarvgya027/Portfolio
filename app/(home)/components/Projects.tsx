import React from 'react'
import { SiExpress, SiFirebase, SiFramer, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiShadcnui, SiSupabase, SiTailwindcss, SiVercel } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from './ui/direction-aware-hover'

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio,",
      tech: [SiNextdotjs, SiTailwindcss, SiVercel, SiFramer, SiShadcnui],
      link: "https://github.com/Sarvgya027/Portfolio",
      cover: "/ProjectImages/project3.png",
      background: "bg-[#495B5B]"

    },
    {
      title: "UiFry - UI template",
      tech: [SiNextdotjs, SiTailwindcss],
      link: "https://github.com/Sarvgya027/UiFry",
      cover: "/ProjectImages/project1.png",
      background: "bg-[#495B5B]"
    },
    {
      title: "ResumeForger - Resume builder",
      tech: [SiReact, SiFirebase, SiTailwindcss],
      link: "https://github.com/Sarvgya027/ResumeForger-complete",
      cover: "/ProjectImages/project2.png",
      background: "bg-[#495B5B]"
    },
    {
      title: "Chatify - Chat web app",
      tech: [SiReact, SiMongodb, SiNodedotjs, SiExpress],
      link: "https://github.com/Sarvgya027/Chatify",
      cover: "/ProjectImages/image4.jpg",
      background: "bg-[#495B5B]"
    },
    {
      title: "King's",
      tech: [SiReact, SiMongodb, SiNodedotjs, SiExpress, SiTailwindcss],
      link: "https://github.com/Sarvgya027/ResumeForger-complete",
      cover: "/ProjectImages/project4.png",
      background: "bg-[#495B5B]"
    },
    {
      title: "Engage - social media web app",
      tech: [SiNextdotjs, SiPrisma, SiPostgresql, SiTailwindcss],
      link: "https://github.com/Sarvgya027/Engage",
      cover: "/ProjectImages/image.png",
      background: "bg-[#495B5B]"
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
                <div className='flex items-center justify-start gap-5'>{project.tech.map((Icon, index) => <Icon key={index} className='w-10 h-10' />) }</div>
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