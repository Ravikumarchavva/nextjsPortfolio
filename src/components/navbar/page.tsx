"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { CgMenu } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavbarLinks from './navbarLinks/page';
import {pageLink} from './../../types/navbar';
import {motion} from 'framer-motion'
const links : pageLink[] = [
  {url:"/", title:"Home"},
  {url:"/about", title:"About"},
  {url:"/portfolio", title:"Portfolio"},
  {url:"/contact", title:"Contact"}
];

const Navbar = () => {
  const [menu,setMenu] = useState(true);
  const [fix,setFix] = useState(false);
  const handleClick = () =>{
    setMenu(!menu);
  };
  function handleNavScroll(){
    const height = window.scrollY / window.innerHeight;
    if(height>=0.3){
      setFix(true);
    }
    else{
      setFix(false);  
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", handleNavScroll);
}  return (
    <div className={(fix!==true) ? 
    'w-full h-[6vh] min-h-14 text-white flex items-center justify-between z-[9] fixed px-[5vw]' 
    : 'w-full h-[6vh] min-h-14 text-white bg-[#565388] flex items-center justify-between z-[20] fixed px-[5vw]'}>
          <motion.div whileHover={{scale:1.1}} className='logo z-[11] flex items-center justify-center gap-1 bg-[#36A330] p-1 rounded-md'>
            <div className='text-white'>Blaze</div>
            <div className='bg-white text-black rounded-md px-1'>Dev</div>
          </motion.div>
        <div className='hidden md:flex gap-4 text-lg font-semibold'>
          {links.map(link =>{
            return (
              <NavbarLinks path={link} key={`${link.title}`}/>
            )
          })}
        </div>
        <div className='hidden lg:inline-block'>
            <motion.button whileHover={{scale:1.1}} className='bg-[#36A330] hover:bg-[#0ED354] px-2 py-1 text-white rounded-md'>Resume</motion.button>
        </div>
        <motion.div whileHover={{scale:1.05}} className='social-media hidden md:flex gap-4 bg-white rounded-md px-2 py-1'>
        <motion.button whileHover={{scale:1.1}}><Link href="https://github.com/Ravikumarchavva" target="_blank"><FaGithub className='size-6' color="#000000"/></Link>
          </motion.button>
        <motion.button whileHover={{scale:1.1}}><Link href="https://www.linkedin.com/in/ravikumar-chavva" target="_blank"><FaLinkedin className='size-6' color='#0B66C2'/></Link></motion.button>
        </motion.div>
        <motion.div whileTap={{scale:1.5}} className='z-[51] md:hidden'>
          <button onClick={handleClick} className=''>
            {menu ? <CgMenu className='w-10 h-8'/> : <MdCancel className='w-10 h-8'/>}
          </button>
          </motion.div>
          {!menu && <motion.div initial={{x:"100%"}} animate={{x:"0%"}} transition={{delay:0.1,duration:0.4,ease:"easeInOut",when:"beforeChildren",staggerChildren:0.2}} className='top-0 left-0 z-[10] absolute w-screen h-screen bg-[#565388] text-white flex flex-col items-center justify-center gap-8 text-4xl'>
              {links.map((link) =>{
                return(
                  <motion.div initial={{scale:0.5,opacity:0.4}} animate={{scale:1,opacity:"100%"}} transition={{delay:.3,duration:0.4,ease:"easeInOut"}}>
                    <NavbarLinks path={link} key={`${link.title}`}/>
                  </motion.div>
                  )
              })}
          </motion.div>}
    </div>
  )
}

export default Navbar