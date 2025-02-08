import React from "react";
import { NavLink } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";


function Card({item}){

    
    return(

        <div className={`flex items-center gap-20 md:gap-40 ninefifty:gap-64 ${item.key % 2 == 0 && " flex-col sm:flex-row-reverse"} ${item.key % 2 != 0 && "flex-col sm:flex-row"} w-full pb-16 relative`}>


            <img src={item.imgsrc} alt={item.title} className=" w-[90%] fourhundred:w-[85%] sm:w-[45%] md:w-[40%] ninefifty:w-[35%] transition-all duration-200 hover:scale-[1.1] relative z-10" onClick={()=> window.open(`${item.livelink}`,"_blank")} />

            <div className={`hidden sm:block h-[2px] ${item.key == 1 && "bg-[#156cdd]"} ${item.key == 2 && "bg-[#663399]"} ${item.key == 3 && "bg-[#2694d4]"} ${item.key == 4 && "bg-[#fc815c]"} absolute ${item.key % 2 == 0 ? "left-1/2 right-1/4" : "right-1/2 left-1/4"}`}></div>

            <div className={`hidden sm:block w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 bg-white z-30 ${item.key == 1 && "border-[#156cdd]"} ${item.key == 2 && "border-[#663399]"} ${item.key == 3 && "border-[#2694d4]"} ${item.key == 4 && "border-[#fc815c]"} transition-all duration-200 hover:scale-125`}></div>

            <motion.div initial={item.key % 2 == 0 ? {x:-30,opacity:0} : {x:30,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.4}} className="mx-[14px] sm:mx-0">

                <div className="flex items-center gap-2">

                    <h3 className={`font-rubik text-3xl ${item.key == 1 && "text-[#156cdd]"} ${item.key == 2 && "text-[#663399]"} ${item.key == 3 && "text-[#2694d4]"} ${item.key == 4 && "text-[#fc815c]"}`}>{item.title}</h3>

                    <a href={item.livelink} target="blank">

                        <FiExternalLink size={24} className={`cursor-pointer ${item.key == 1 && "text-[#156cdd]"} ${item.key == 2 && "text-[#663399]"} ${item.key == 3 && "text-[#2694d4]"} ${item.key == 4 && "text-[#fc815c]"}`}></FiExternalLink>

                    </a>

                </div>

                <h3 className={`${item.key == 1 && "text-[#156cdd]"} ${item.key == 2 && "text-[#663399]"} ${item.key == 3 && "text-[#2694d4]"} ${item.key == 4 && "text-[#fc815c]"} text-xl font-nuninto mt-1 dark:text-gray-500`}>({item.subtitle})</h3>

                <p className="font-nuninto my-2.5">{item.description}</p>

                <ul className="flex flex-wrap">

                    {
                        item.technologyused.map((tech)=>{

                            return <li className="border border-gray-400 rounded-full mb-2 mr-2 px-4 font-nuninto py-1">#{tech}</li>

                        })
                    }

                </ul>

            </motion.div>

        </div>

    )

}

export default Card;