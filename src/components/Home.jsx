import React from "react";
import h from "../assets/1.jpg";
import { PiHandWavingLight } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Navbar from "./Navbar";
import g from "../assets/Piyush resume 1.pdf"
import { Link } from "react-scroll";
import {motion} from "motion/react";
import { useEffect,useState } from "react";

const Home = () => {

  return (
    <div>
      <Navbar></Navbar>

      <div name="home" className="relative flex flex-col items-center h-screen justify-center py-[131px] dark:bg-black dark:text-white">

        <motion.div className="animatee w-[9rem] h-[9rem] rounded-full flex items-center justify-center">

          <motion.img initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.8,type:"spring",stiffness:100}} src={h} alt="Portfolio" className="w-[9rem] rounded-full border border-[#ed2218] dark:border-[#ffd700]"/>

        </motion.div>

        <motion.span initial={{y:-20,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,delay:0.3}} className="flex text-xl md:text-3xl items-center font-nuninto gap-2 mb-2.5 fourhundred:mb-1.5 mt-1.5">
          Hi! I'm Piyush Dhote
          <PiHandWavingLight></PiHandWavingLight>          
        </motion.span>

        <motion.h1 initial={{y:-30,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.5}} className="font-nuninto text-center leading-[38px] fourhundred:leading-[55px] fourhundred:text-start text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px]">full stack web developer</motion.h1>

        <motion.h1 initial={{y:-30,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.5}} className="font-nuninto text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] mt-[-5px] fourhundred:mt-[-15px]">based in India.</motion.h1>

        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,delay:0.7}} className="font-nuninto text-[17px] fiveeighty:text-xl px-[18px] fourhundred:px-0 py-2.5 fourhundred:py-0">
          "Design, develop, deliver – the full-stack journey."
        </motion.p>

        <div className="flex flex-col fiveeighty:flex-row items-center gap-5 fiveeighty:gap-4 mt-6 font-rubik">

          <motion.a initial={{y:40,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,delay:0.9}} href="https://web.telegram.org/k/#1855647223" target="_blank">

          <button className="button1 dark:bg-transparent dark:border-white">

            <span className="gap-1.5">

              

              contact me
              <FaArrowRightLong></FaArrowRightLong>

            </span>

          </button>

          </motion.a>

          <motion.a initial={{y:40,opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,delay:0.9}} href={g} target="_blank">

          <button className="button2 gap-1.5">

            

            my resume
            <FaDownload></FaDownload>
            
          </button>

          </motion.a>

        </div>


        <Link to="about" smooth>

          <button className="absolute bottom-0 flex flex-col items-center font-rubik px-7 text-lg -translate-x-1/2">

            About Me
            <MdOutlineKeyboardDoubleArrowDown size={20} className="animate-bounce"></MdOutlineKeyboardDoubleArrowDown>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
