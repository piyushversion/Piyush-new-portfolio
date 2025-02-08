import React from 'react'
import { useState } from 'react';

const Tooltip = ({text,children,col}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative inline-block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

                <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 group transition-all duration-300 ease-in-out ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`} style={{pointerEvents : isHovered ? "auto" : "none"}}>

                    <div className={`text-[#${col}] text-sm px-3 py-2 shadow-lg z-10 relative bg-white rounded-full dark:bg-black dark:border`}>

                        <span className='text-sm'>{text}</span>
                        {/* for arrow */}
                        <div className={`absolute top-[85%] left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-white dark:bg-black dark:border-b dark:border-r`}></div>

                    </div>

                </div>
            

            {children}

        </div>
    )
}

export default Tooltip