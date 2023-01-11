import React from 'react'
import { motion } from "framer-motion";

const Experience = () => {
    const experience = [
        {
            id: 1,
            company: "Ginia Group",
            role: "Software Engineering Intern",
            duration: "June 2022 - August 2022",
            bulletPoints: [
            "Worked alongside senior developers in the R&D department to produce enterprise level software.",
            "Developed a full stack Django-based web application that accepted cryptocurrency based donations for non-profit organizations",
            "Implemented a user authentication system for posting non-profit organizations backed by a SQL database.",
            ],
        },
        {
            id: 2,
            company: "Freelance Front-end Designer and Developer",
            role: "Frontend Designer and Developer",
            duration: "January 2018 - August 2021",
            bulletPoints: [
            "Utilized my design and development skills to create and launch various websites for a range of clients.",
            "Created front-end user interfaces primarily using Tailwind, Bootstrap, JavaScript, and Figma.",
            "Grew several customer bases over 50%, solved issues in user experience design.",
            "Interfaced with employers on a daily basis to ensure cohesiveness in project specifications.",
            ],
        },
    ]
  return (
    <div className="w-full flex justify-center items-center text-white">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} name="Experience">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full">
        <div className="text-center py-8">
        <p className="text-md tracking-widest inline text-zinc-700">
            EXPERIENCE
          </p>
          <h2 className='text-4xl pt-1 text-zinc-100 font-bold'>
            My Experience
          </h2>
        </div>

        <div className='w-full md:max-w-screen-lg flex flex-col mx-auto md:flex-row md:space-x-5 mx-5 p-6'>
            {experience.map(({id,company,role,duration,bulletPoints}) => (
                <article className='my-4 flex flex-col rounded-lg items-center
                space-y-2 md:space-y-5 flex-shrink-0 w-[320px] md:w-[400px] xl:w-[450px] snap-center
                bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
                transition-opacity duration-200 overflow-hidden'>
                    <div className='px-0 md:px-10'>
                        <h4 className='text-xl text-zinc-500'>{company}</h4>
                        <p className='font-bold text-2xl mt-1'>{role}</p>
                        <p className='uppercase py-4 text-sm text-zinc-500'>{duration}</p>
                        <ul className='list-disc space-y-3 ml-5 text-sm md:text-sm xl:text-base'>
                            {bulletPoints.map(bulletPoint =>(
                            <li>{bulletPoint}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default Experience