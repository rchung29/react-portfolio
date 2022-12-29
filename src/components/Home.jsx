import React from 'react'
import { motion } from "framer-motion";
import HeroImage from "../assets/IMG_3432.png";
import {useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "CS @ THE UNIVERSITY OF VIRGINIA",
    ],
    delaySpeed: 2000,
  })
  return (   
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} className='w-full h-screen items-center'>
      <div className='max-w-screen-xl flex flex-col items-center justify-center mx-auto md:flex-row'>
        <div className='flex flex-row md:flex-col justify-start items-center h-full md:mx-2'>
          <a href="#!" type="button" class="rounded-full border border-zinc-500 text-zinc-500 leading-normal w-10 h-10 hover:border-red-500 hover:bg-red-500 hover:text-white ease-in duration-100 m-2">
             <svg aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
                class="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
          </a>
          <a href="#!" type="button" class="rounded-full border border-zinc-500 text-zinc-500 leading-normal w-10 h-10 hover:border-red-500 hover:bg-red-500 hover:text-white ease-in duration-100 m-2">
              <svg aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
                class="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
          </a>
        </div>
        <div className='flex flex-col items-center h-full md:mr-12 md:ml-8'>
          <div className='text-center md:text-left my-4 md:my-72'>
            <h2 className='text-sm my-4 tracking-widest text-zinc-700'>
              {text}
            </h2>
            <div>
              <h2 className='text-6xl md:text-7xl font-bold text-zinc-100'>
                Hey, I'm Ryan
              </h2>
            </div>
            <div className='my-10 hover:-translate-y-1 duration-200'>
              <a href="https://drive.google.com/file/d/1Quqv5v9nt_zj8QglnTgzFYRwsgsjSHFw/view?usp=sharing" class=" rounded-lg px-8 py-4 text-white border-2 border-red-500 bg-red-500 text-sm font-medium hover:bg-red-400 hover:border-red-400">
                Download My Resume
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-items-end flex-col items-center h-full md:m'>  
          <img src={HeroImage} alt="this is me!" className='rounded-full h-2/3 w-2/3' />
          <div className='absolute border border-red-500 rounded-full h-[350px] w-[350px] animate-ping'></div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home