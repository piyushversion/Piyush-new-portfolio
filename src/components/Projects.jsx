import React from 'react'
import one from "../assets/6.png";
import two from "../assets/7.png";
import three from "../assets/8.png";
import four from "../assets/9.png";
import Card from './Card';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Projects = () => {

  const projectsarray = [

      {
          imgsrc : one,
          title: "SkySense",
          subtitle: "Weather Checking App",
          description: "Get straightforward and reliable weather information without the hassle. Check your city’s forecast or explore global patterns easily.",
          technologyused:["html","css","javascript","api"],
          key:1,
          livelink: "https://piyushweatherapp.netlify.app"
      },
      {
          imgsrc : two,
          title: "GridMasters",
          subtitle: "Tic-Tac-Toe",
          description: "Dive into the world of strategy and fun. Whether you’re a beginner or a pro, test your skills with every move. Play the timeless game of X's and O's.",
          technologyused:["html","css","javascript"],
          key:2,
          livelink: "https://tick-tack-toei.netlify.app"
      },
      {
          imgsrc : three,
          title: "KeyShield",
          subtitle: "Password Generator",
          description: "Generate strong, unique passwords instantly to protect your accounts and enhance your online security. Create hack-proof passwords effortlessly.",
          technologyused:["html","css","javascript"],
          key:3,
          livelink: "https://piyushpasswordgenerator.netlify.app" 
      },
      {
          imgsrc : four,
          title: "Wanderlust",
          subtitle: "Airbnb Clone",
          description: "Discover cozy homes, luxurious villas, and unique stays around the world. Explore a wide range of accommodations tailored to your needs.",
          technologyused:["react","tailwind","express","monogoDB","cloudinary"],
          key:4,
          livelink: "https://piyushairbnb.vercel.app"
      },

  ]

  return (

    <div name="projects" className='h-auto relative bg-white dark:bg-black dark:text-white'>
      
      <section className='mx-auto w-[90%] pt-[125px] sm:pt-24 pb-20 sm:pb-14 relative'>

        <span className='absolute top-0 left-1/2 -translate-x-1/2 font-rubik border-0 sm:border-b-2 sm:border-r-2 sm:border-l-2 px-0 sm:px-7 py-3.5 sm:py-1 text-[1.7em] fourhundred:text-[1.8em] fourfifty:text-[2em] rounded-b-lg font-medium text-[#1788ae] border-[#1788ae] dark:text-white dark:border-white bg-white z-10 dark:bg-black sm:dark:border-t-2 dark:rounded-t-lg'>Latest Work</span>

        {

            projectsarray.map((item)=>{

                return <Card item={item}></Card>

            })

        }

        <div className='hidden sm:block w-[2px] bg-[#1788ae] dark:bg-white absolute top-0 bottom-0 left-1/2 -translate-x-1/2'></div>

        <span className='absolute bottom-0 left-1/2 -translate-x-1/2 font-rubik border-2 px-5 sm:px-7 text-[1.6em] fourhundred:text-[1.7em] fourfifty:text-[2em] rounded-lg font-medium text-[#1788ae] border-[#1788ae] dark:text-white dark:border-white bg-white z-10 flex items-center flex-col dark:bg-black'>
          
          Let's Talk

          <MdOutlineKeyboardDoubleArrowDown size={25} className='animate-bounce'></MdOutlineKeyboardDoubleArrowDown>

        </span>

      </section>

    </div>

  )
}

export default Projects