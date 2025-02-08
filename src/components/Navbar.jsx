import { Link } from "react-scroll";
import h from "../assets/1.jpg";
import { RiArrowRightUpLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode,MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { keyframes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAddressCard,
  faBuilding,
  faHouse,
  faBars,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const arr = [
    {
      namee: "Home",
      link: "home",
      key: 1,
      iconn: faHouse,
    },
    {
      namee: "About",
      link: "about",
      key: 2,
      iconn: faAddressCard,
    },
    {
      namee: "Projects",
      link: "projects",
      key: 3,
      iconn: faBuilding,
    },
    {
      namee: "Contact",
      link: "contact",
      key: 4,
      iconn: faAddressBook,
    },
  ];

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const[darkMode,setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(()=>{

    if(darkMode){

      document.documentElement.classList.add("dark");

      localStorage.setItem("theme","dark");

    }else{

      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme","light");

    }

  },[darkMode])

  const sideMenuRef = useRef()


  const openmenu = () => {
    
    sideMenuRef.current.style.transform = "translateX(-16rem)";
    

  }

  const closemenu = () => {
    
    sideMenuRef.current.style.transform = "translateX(16rem)";
  

  }

  return (
    <div className={`fixed top-0 w-full z-40 flex items-center justify-between py-[15px] md:py-3 px-5 lg:px-8 ${scroll ? "bg-white bg-opacity-30 backdrop-blur-lg shadow-sm dark:bg-black" : ""}`}>

      <div
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <img
          src={h}
          alt="Portfolio"
          className="rounded-full w-11 cursor-pointer border border-[#ed2218]"
        />

        <span className="font-playwrite text-[25px] cursor-pointer dark:text-white">
          Piyush
        </span>
      </div>

      <ul
        className={`hidden md:flex gap-8 rounded-full font-nuninto text-lg py-2.5 px-12 font-medium ml-[40px] dark:border-white/50 dark:bg-transparent dark:text-white dark:border ${
          scroll ? "" : "bg-white shadow"
        }`}
      >
        {arr.map((item) => {
          return (
            <li
              key={item.key}
              className="cursor-pointer relative overflow-hidden group"
            >
              <Link
                to={item.link}
                smooth
                className="relative transition-all duration-[400ms] ease-in-out bottom-0 group-hover:bottom-10"
              >
                {item.namee}
              </Link>
              <Link
                to={item.link}
                smooth
                className="absolute left-1/2 -translate-x-1/2 text-red-400 top-10 transition-all duration-[400ms] ease-in-out group-hover:top-0 dark:text-white"
              >
                <FontAwesomeIcon
                  icon={item.iconn}
                  className="text-2xl"
                ></FontAwesomeIcon>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-5">

        <button onClick={()=> setDarkMode(!darkMode)}>
          
          {
              darkMode ? <MdLightMode size={30} className="text-white"></MdLightMode> : <MdOutlineDarkMode size={30} className="text-black"></MdOutlineDarkMode>
          }

        </button>

        <div className="hidden ninefifty:block">

          <a href="https://www.linkedin.com/in/piyush-dhote-70224123a" target="blank" className={`anchortag flex items-center gap-2 cursor-pointer border border-black rounded-full px-4 py-1.5 font-semibold dark:border-white/50 dark:bg-transparent dark:text-white group ${ scroll ? "" : "bg-white" }`}>

            <button className="text-lg font-nuninto">Linkedln</button>

            <span className="bg-black text-white rounded-full p-[2px] transition-all duration-300 group-hover:rotate-45 dark:bg-transparent">
              <RiArrowRightUpLine size={23}></RiArrowRightUpLine>
            </span>

          </a>

        </div>

        <button className="block md:hidden ml-2" onClick={openmenu}>

          <FontAwesomeIcon icon={faBars} className="text-[27px] dark:text-white"></FontAwesomeIcon>

        </button>

      </div>

      {/* for side bar hamburger menu */}

      <ul ref={sideMenuRef} className="flex md:hidden flex-col items-center gap-4 pt-20 pb-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 font-rubik justify-between">

        <button onClick={closemenu} className="absolute right-5 top-6"><FontAwesomeIcon icon={faPlus} className="text-[27px] rotate-45"></FontAwesomeIcon></button>
        
        <div className="flex flex-col gap-4 text-center">

        {arr.map((item) => {
          return (
            <li key={item.key} className="text-lg" >
                <Link to={item.link} smooth className="cursor-pointer" onClick={closemenu}>

                  {item.namee}

                </Link>
              </li>
            );
          })}
          </div>

        <img src={h} alt="Portfolio" className="rounded-full w-20 cursor-pointer border border-[#ed2218] self-center"/>

      </ul>

    </div>
  );
}

export default Navbar;
