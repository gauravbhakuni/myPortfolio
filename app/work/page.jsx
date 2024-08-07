"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description: "Frontend website",
    stack: [
      {
        name: "HTML 5"
      },
      {
        name: "CSS 3"
      },
      {
        name: "JavaScript"
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Project 2",
    description: "Ecommerce website for Shoe Sales",
    stack: [
      {
        name: "Next.js"
      },
      {
        name: "TailwindCSS"
      },
      {
        name: "Sanity CMS"
      },
    ],
    image: "/assets/work/nike_Page.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Project 3",
    description: "Fullstack Website",
    stack: [
      {
        name: "Next.js"
      },
      {
        name: "TailwindCSS"
      },
      {
        name: "Node.js"
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
]


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>

              {/* Outline */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className='text-[42px] font-bold leading-none dark:group-hover:text-accent-hover group-hover:text-accentLight-hover transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/* Project Description */}
              <p className='leading-tight opacity-60'>
                {project.description}
              </p>
              {/* Stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl dark:text-accent text-accentLight'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className='border dark:border-white/20 border-black/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[30px] h-[30px] rounded-full dark:bg-white/5 bg-black/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-xl dark:group-hover:text-accent-hover group-hover:text-accentLight-hover' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Repository button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[30px] h-[30px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-xl dark:group-hover:text-accent-hover group-hover:text-accentLight-hover' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

          </div>

          <div className='w-full xl:w-[50%] '>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-fit'
                      />
                    </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* Slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="dark:bg-accent bg-accentLight dark:group-hover:bg-accent-hover group-hover:bg-accentLight-hover dark:text-primary text-primaryLight text-[22px] w-[30px] h-[30px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work