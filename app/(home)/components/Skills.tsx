'use client'
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";

function Skills() {
  const skills = [
    {
      text: "TypeScript",   
      Icon: SiTypescript 
    },
    {
      text: "JavaScript",
      Icon: IoLogoJavascript 
    },
    {
      text: "Python",
      Icon: FaPython 
    },
    {
      text: "React",
      Icon: FaReact 
    },
    {
      text: "Next.js",
      Icon: RiNextjsFill 
    },
    {
      text: "Tailwind CSS",
      Icon: RiTailwindCssFill 
    },
    {
      text: "Node.js",
      Icon: FaNodeJs 
    },
    {
      text: "Express.js",
      Icon: SiExpress 
    },
    {
      text: "Prisma",
      Icon: SiPrisma 

    },
    {
      text: "Supabase",
      Icon: RiSupabaseFill 
    },
    {
      text: "MongoDB",
      Icon: DiMongodb 
    },
    {
      text: "MySQL",
      Icon: DiMysql 
    },
    {
      text: "Git",
      Icon: FaGitAlt
    },
    {
      text: "Machine Learning",
      Icon: LuBrainCircuit
    },
    

  ]
  return (
    <div className='max-w-5xl mx-auto px-8'>

    <div className='flex flex-col w-full items-center justify-center'>
      <div>
      <Title text="Skills" />
    </div>
    <HoverEffect items={skills} />
    </div>
    </div>
  )
}

export default Skills