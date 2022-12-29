import React from 'react'
import RetaiLanding from "../assets/RetailLanding.png";
import RetaiDashboard from "../assets/RetailDashboard.png";
import PellucidLanding from "../assets/PellucidLanding.png";
import { motion } from "framer-motion";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      src: RetaiLanding,
      link: "https://joyful-alpaca-124d8b.netlify.app/",
      git: "https://github.com/rchung29/retail-proxies-landing-final"
    },
    {
      id: 2,
      src: RetaiDashboard,
      link: "https://lustrous-crumble-8ca855.netlify.app/",
      git: "https://github.com/rchung29/retail-proxies-dashboard"
    },
    {
      id: 3,
      src: PellucidLanding,
      link: "https://beautiful-taffy-cd52d4.netlify.app/",
      git: "https://github.com/rchung29/pellucid-landing",
    },
  ]
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} name="Projects" className="w-full text-white md:h-screen">
        <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center md:text-left">
          <p className="text-md tracking-widest inline text-zinc-700">
            MY PROJECTS
          </p>
          <h2 className='text-4xl pt-1 text-zinc-100 font-bold'>
            What I've Been Working On
          </h2>
        </div>
        <div className='my-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({id,src,link,git}) => (
            <div key={id} className="bg-zinc-800 rounded-lg">            
              <img src={src} alt="" className='rounded-md'/>
              <div className='flex items-center justify-center'>
                <button className=" text-zinc-500 hover:text-white w-1/2 px-3 py-1 m-4 duration-200 hover:scale-105">
                <a href={link}>Demo</a>
                </button>
                <button className="text-zinc-500 hover:text-white w-1/2 px-3 py-1 m-4 duration-200 hover:scale-105">
                <a href={git}>Github</a>
                </button>
              </div>            
            </div>
          ))}
        </div>
        </div>
    </motion.div>

  )
}

export default MyProjects