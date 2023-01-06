import React from 'react'
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className='w-full h-screen flex justify-center text-white items-center'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} name="About" className="">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center md:text-left">
          <p className="text-md tracking-widest inline text-zinc-700">
            ABOUT ME
          </p>
          <h2 className='text-4xl pt-1 text-zinc-100 font-bold'>
            A Little Background On Me
          </h2>
        </div>

        <p className="text-lg mt-12 text-zinc-500 text-center md:text-left">
          I'm currently a second year student at the University of Virginia studying Computer Science. I first started as a graphic designer but my love for front-end design led me to HTML, CSS, and JavaScript. I started designing and marking up websites in 2018 and freelanced my work so I could work on my craft.
          Since then, I've interned at Ginia Group, a government contractor, in their research and development department where I developed my first full-stack application using Django. In my time outside of school, I like to code, workout, and explore the outdoors with my friends.
        </p>
      </div>
    </motion.div>
    </div>
  )
}

export default AboutMe