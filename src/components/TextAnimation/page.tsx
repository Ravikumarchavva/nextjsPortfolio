import React from 'react'
import {None, motion} from 'framer-motion'
const TextAnimation = ({params,delay,color}:{params:String,delay:number,color:String | None}) => {
  return (
      <span className='overflow-y-hidden'>
          <motion.span 
          initial={{height:"0%"}} animate={{height:"100%"}} transition={{delay:delay,duration:1.3}}
          className={`${color} && text-[${color}]`}>
              {params}
          </motion.span>
      </span>
    )
  }

  export default TextAnimation