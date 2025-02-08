import React, { useState,useEffect } from 'react'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import Lottie from 'lottie-react';
import l from "../assets/4.json";
import Tooltip from './Tooltip';
import {motion} from "motion/react";

const About = () => {

  const arr = ['javascript','react.js','redux','node.js','express.js','mongoDB','html','css','tailwind','vscode','sql','framer-motion' ,'java','next.js','postman']

  const arr2 = [

      {
        logo: <SiMongodb size={50} className='text-[#47a248]'></SiMongodb>,
        letter: 'M',
        color: '47a248',
        name:"mongoDB",
        key:1
      },
      {
        logo: <SiExpress size={50} className='text-[#808080]'></SiExpress>,
        letter: 'E',
        color: '808080',
        name: "Express.js",
        key:2
      },
      {
        logo: <FaReact size={50} className='text-[#61dafb]'></FaReact>,
        letter: 'R',
        color: '61dafb',
        name:"React.js",
        key:3
      },
      {
        logo: <FaNodeJs size={50} className='text-[#8cc84b]'></FaNodeJs>,
        letter: 'N',
        color: '8cc84b',
        name:"Node.js",
        key:4
      }

  ]

  return (

    <div name="about" className='relative bg-gradient-to-br from-pink-100 to-amber-100 flex flex-col ninehundred:flex-row gap-12 ninehundred:gap-0 items-center justify-center py-20 ninehundred:py-24 dark:bg-gradient-to-r dark:from-black dark:to-black dark:text-white'>
      
      <motion.div initial={{x:-7,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.3}} className='max-w-2xl flex flex-col gap-4 ml-0 ninehundred:ml-[76px] px-[30px] md:px-0'>

        <h1 className='font-rubik text-2xl'>Introduction</h1>

        <p className='font-nuninto'>Hi, I'm Piyush, a skilled and dedicated MERN stack developer with a strong foundation in programming and design. I graduated with degree in Electrical and Electronics Engineering in 2024 from LNCT Bhopal, where I honed my skills in programming and software development.</p>

        <p className='font-nuninto'>Hailing from Bhilai, Chhattisgarh, I bring a unique blend of creativity and technical expertise to my projects. My focus is on crafting responsive, user-friendly websites that not only look great but also deliver seamless functionality.</p>

        <h1 className='font-nuninto'>Technologies and tools that I use to do my work.</h1>

        <ul className='flex max-w-2xl flex-wrap'>

          {

            arr.map(item => <li className='border border-gray-400 rounded-full mb-2 mr-2 px-4 font-nuninto py-1 text-[15px] fiveeighty:text-base'>#{item}</li>)

          }

        </ul>

        <div className='mt-9 flex gap-[1.6rem] fourhundred:gap-8 place-content-center ninehundred:place-content-start'>

          {arr2.map((element) => (
            <Tooltip key={element.key} text={element.name} col={element.color}>
              <button className="text-gray-400 rounded transition-all duration-300 transform">
                {element.logo}
                <span className={`text-3xl text-[#${element.color}]`}>{element.letter}</span>
              </button>
            </Tooltip>
          ))}

        </div>

      </motion.div>

      <motion.div className='max-w-2xl mr-0 ninehundred:mr-2'>

        <Lottie animationData={l}></Lottie>

      </motion.div>
      
    </div>

  )
}

export default About
