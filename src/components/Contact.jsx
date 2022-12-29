import React from 'react'
import { motion } from "framer-motion";
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {AiFillFileWord} from 'react-icons/ai';

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} name="Contact" className="w-full text-white md:h-screen">
        <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8 text-center">
          <p className="text-md tracking-widest inline text-zinc-700">
            CONTACT
          </p>
          <h2 className='text-4xl pt-1 text-zinc-100 font-bold'>
            My Socials
          </h2>
        </div>
        <div className='my-12 flex flex-col md:flex-row justify-center'>
                <a href="https://github.com/rchung29" className='justify-center text-center mx-2 my-4 md:my-0 flex items-center px-6 py-3 rounded-full border border-zinc-500 text-zinc-500 hover:border-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-1 ease-in-out duration-200'>
                    <FaGithub size={20} className="mr-3" />Github
                </a>
                <a href="https://www.linkedin.com/in/ryan-chung-706546220/" className='justify-center text-center mx-2 my-4 md:my-0 flex items-center px-6 py-3 rounded-full border border-zinc-500 text-zinc-500 hover:border-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-1 ease-in-out duration-200'>
                    <FaLinkedin size={20} className="mr-3" />LinkedIn
                </a>
                <a href="mailto:msc2pd@virgina.edu" className='justify-center text-center mx-2 my-4 md:my-0 flex items-center px-6 py-3 rounded-full border border-zinc-500 text-zinc-500 hover:border-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-1 ease-in-out duration-200'>
                    <MdEmail size={20} className="mr-3" />Email
                </a>
                <a href="https://drive.google.com/file/d/1Quqv5v9nt_zj8QglnTgzFYRwsgsjSHFw/view?usp=sharing" className='justify-center text-center mx-2 my-4 md:my-0 flex items-center px-6 py-3 rounded-full border border-zinc-500 text-zinc-500 hover:border-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-1 ease-in-out duration-200'>
                    <AiFillFileWord size={20} className="mr-3" />Resume
                </a>
        </div>
        </div>
    </motion.div>
  )
}

export default Contact