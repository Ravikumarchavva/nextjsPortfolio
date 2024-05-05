"use client";
import Navbar from "@/components/navbar/page";
// import About from "./about/page";
// import Contact from "./contact/page";
// import Portfolio from "./portfolio/page";
// import Skills from "./skills/page";
import { motion ,MotionConfig} from "framer-motion";
import TextAnimation from "@/components/TextAnimation/page";
import ScrollToTopOnReload from '@/components/ScrollToTop'; 
export default function Home() {
  return (
    <main>
      <ScrollToTopOnReload />
            <Navbar />
      <motion.div initial={{ height: "100%", position:"fixed"}} animate={{ height: "0%" }} transition={{ delay: 3.5, duration: 1.65 }} className="w-full h-full overflow-y-hidden bg-[#565388] px-[1vw] flex flex-col items-center justify-between z-[22]">
                <div className="portrait:w-1/2 w-[10vw] mt-[2vw] text-center text-white flex flex-col items-center justify-center">
                  <div>DESCRIPTION</div>
                  <div className="inline">&copy; 2024</div>
                </div>
                <motion.div initial={{height:0}} animate={{height:100}} transition={{delay:0.6,duration:1,ease:"easeInOut"}} className="portrait:text-[10vw] portrait:gap-x-[1.5vh] overflow-y-hidden landscape:text-[4.5vw] flex flex-wrap gap-x-[1vw] items-start justify-start font-bold text-white">
                <div className="portrait:hidden landscape:inline-block"><TextAnimation delay={0.6} params={"This"} color={''} /></div>
                <div className="portrait:hidden landscape:inline-block"><TextAnimation delay={0.6} params={"is"} color={''} /></div>
                <TextAnimation delay={0.6} params={"Ravi "} color={"#36A330"} />
                <TextAnimation delay={0.6} params={"Kumar "} color={''} />
                <div className="portrait:hidden landscape:inline-block"><TextAnimation delay={0.6} params={"Chavva"} color={''} /></div>
                </motion.div>   
                <div className="width-[10vw] h-[10vh] text-white">
                    <h5 className="text-2xl">watch now</h5>
                  </div>                     
        </motion.div>
        {/* {green container} */}
        <motion.div initial={{ height: "100%" }} animate={{ height: "0%" }} transition={{ delay: 3.6, duration: 1.55 }}  className="w-[100vw] h-full bg-[#0ED354] absolute right-0 z-[10]">
            
        </motion.div>
      <motion.div initial={{ top: "100vh"  }} animate={{ top: "0" }} transition={{ delay: 3.5, duration: 1.55 }} className="h-[100vh] bg-[url('/tileps1.jpg')] bg-center bg-cover 
                                md:bg-[url('/tileps5.jpg')] md:bg-right-bottom 
                                flex flex-col px-[5vw]
                                landscape:bg-[url('/tileps5.jpg')] landscape:bg-right-bottom relative">
                                
      
            
            {/* Text container */}
            <div className="h-[80vh] portrait:w-[60vw] md:w-[50vw] lg:w-[55vw] flex flex-col items-start justify-center
            portrait:mt-[12vh]        
            sm:mt-[10vh]
            md:h-full md:pt-10 md:gap-[min(1vw,10px)]
            landscape:pt-16 landscape:pr-8
            lg:pr-[min(1vw,10px)]
            ">
                <motion.div initial={{height:0}} animate={{height:"8vw"}} transition={{delay:4,duration:1.2,ease:"easeInOut"}} 
                className="portrait:px-0 portrait:text-[8vw] portrait:min-h-[12vw] 
                sm:px-0 sm:text-[8vw] sm:min-h-[10vh]
                landscape:text-[3.5vw] landscape:min-h-[6vw] landscape:min-w-[40vw] landscape:flex landscape:items-start landscape:justify-start landscape:gap-[1vw]
                md:last:hidden 
                lg:last:inline-block
                overflow-y-hidden md:w-[50vw] flex items-start justify-between font-bold text-white">
                  <div className="portrait:hidden sm:hidden lg:inline-block"><TextAnimation delay={0.6} params={"This"} color={''} /></div>
                <div className="portrait:hidden sm:hidden lg:inline-block"><TextAnimation delay={0.6} params={"is"} color={''} /></div>
                <div className=" portrait:mr-[2vh]"><TextAnimation delay={0.6} params={"Ravi "} color={"#36A330"} /></div>
                <div className=" portrait:mr-[2vh]"><TextAnimation delay={0.6} params={"Kumar "} color={''} /></div>
                <div className="portrait:hidden sm:hidden landscape:inline-block"><TextAnimation delay={0.6} params={"Chavva"} color={''} /></div>
                </motion.div>
                <h3 className="portrait:hidden sm:block sm:text-xl
                md:text-2xl md:mb-[2vh] lg:block
                lg:text-2xl xl:text-3xl font-bold text-[#dadada]">
                Aspiring Data Scientist
                </h3>
                <p className="portrait:hidden sm:hidden lg:block md:text-[1.7vw] md:w-[min(40vw,70rem)] md:font-normal text-white lg:text-[2.1vh]">
                 Welcome to to my data science portfolio!
                 Explore my journey into data analysis, machine learning,and visualizations
                </p>
                <div className="flex py-2 gap-8 portrait:flex-col sm:flex-col md:flex-row portrait:gap-10 portrait:mt-8 sm:ml-[8vh] md:ml-0">
                  <MotionConfig transition={{duration:.15,ease:"easeInOut"}}>
                  <motion.button whileHover={{scale:1.15}} className="portrait:hidden bg-[#36A330] rounded-lg hover:bg-[#0ED354] sm:p-1 lg:p-2 portrait:p-1 text-white">View Work</motion.button>
                  <motion.button whileHover={{scale:1.15}} className="lg:hidden bg-[#36A330] rounded-lg hover:bg-[#0ED354] hover:text-black sm:p-1 lg:p-2 portrait:p-1 px-2 text-white">Resume</motion.button>
                  <motion.button whileHover={{scale:1.15}} className="bg-[#D6D6D6] text-black hover:bg-white rounded-lg sm:p-1 lg:p-2 portrait:p-1 transition duration-150 ease-out hover:ease-in">Contact Me</motion.button>
                  </MotionConfig>
                </div>
              </div>
            </motion.div>
            {/* <About />
            <Skills />
            <Portfolio />
            <Contact /> */}
            
    </main>
  );
}
