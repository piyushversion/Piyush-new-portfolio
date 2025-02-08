import Lottie from 'lottie-react'
import React from 'react'
import four from "../assets/13.json";
import Form from './Form';
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import {motion} from "motion/react";


const Contact = () => {

  return (

    <div name="contact" className='h-auto relative bg-gradient-to-br from-purple-100 to-indigo-100 dark:bg-gradient-to-t dark:from-black dark:to-black'>

      <section className='flex flex-col sevenhundred:flex-row items-center pt-11 pb-12 sevenhundred:pt-12 sevenhundred:pb-10 ninehundred:pt-5 ninehundred:pb-0 lg:pt-0 lg:pb-0 justify-center lg:justify-between'>

        <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.4}} className='w-[90%] sevenhundred:w-[60%] lg:w-1/2'>
          
          <Lottie animationData={four} className='w-full'></Lottie>
          
        </motion.div>

        <motion.div initial={{x:30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.4}} className='w-[82%] sevenhundred:w-[50%] ninehundred:w-[40%] lg:w-[35%] mr-0 sevenhundred:mr-20'>

          <Form></Form>

        </motion.div>


      </section>

      <motion.div initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.3}} className="w-full flex flex-col items-center">
      
              <ul className="example-2 pt-5">
                <li className="icon-content">
                  <a
                    href="https://www.linkedin.com/in/piyush-dhote-70224123a"
                    aria-label="LinkedIn"
                    data-social="linkedin"
                    target='blank'
                  >
                    <div className="filled" />
                    
                    <FaLinkedin></FaLinkedin>
                  </a>
                  <div className="tooltip">LinkedIn</div>
                </li>
                <li className="icon-content">
                  <a
                    href="https://github.com/piyushversion"
                    aria-label="GitHub"
                    data-social="github"
                    target='blank'
                  >
                    <div className="filled" />
                    
                    <FaGithub></FaGithub>
                  </a>
                  <div className="tooltip font-rubrik">GitHub</div>
                </li>
                <li className="icon-content">
                  <a
                    href="https://www.facebook.com/piyush.maratha.589?rdid=RFwMKXOVGmrVMuBm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15y5GERVE9%2F#"
                    aria-label="meta"
                    data-social="meta"
                    target='blank'
                  >
                    <div className="filled" />
                    
                    <FaMeta></FaMeta>
                  </a>
                  <div className="tooltip font-rubrik">Meta</div>
                </li>
                <li className="icon-content">
                  <a
                    href="https://web.telegram.org/k/#1855647223"
                    aria-label="telegram"
                    data-social="telegram"
                    target='_blank'
                  >
                    <div className="filled" />
                    
                    <FaTelegram></FaTelegram>
                  </a>
                  <div className="tooltip font-rubrik">Telegram</div>
                </li>
              </ul>
      
            <div className="font-rubik text-lg py-3 dark:text-white">Piyush Dhote &copy; 2025</div>
      
      </motion.div>
      
      
    </div>

  )
}

export default Contact