"use client";
import { usePathname } from 'next/navigation';
import React from 'react'
import {pageLink} from '../../../types/navbar'
import Link from 'next/link';
import {motion} from 'framer-motion'
const NavbarLinks = ({path}:{path:pageLink}) => {
    const currentPath = usePathname();
  return (
    <motion.div whileHover={{scale:1.05,background:"white",color:"black"}} className={`rounded-md px-1 ${currentPath===path.url && "bg-[#36A330] hover:bg-[#0ED354] text-white"}`}>
        <Link href={`${path.url}`}>{path.title}</Link>
    </motion.div>
  )
}

export default NavbarLinks