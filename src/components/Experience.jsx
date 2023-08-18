import React from 'react'
import { motion } from "framer-motion";

const Experience = () => {
  const experience = [
        {
          id: 1,
          company: "RoomMe",
          role: "Software Engineering Intern",
          duration: "June 2023 - August 2023",
          bulletPoints: [
          "Led development for a resident management and custom ad dashboard, resulted in the acquisition of a $500K contract and placement in up to 160 apartment complexes by end of year.",
          "Automated social media growth through the creation of selenium scripts, resulting in a 200% increase in followers, 50% growth in users, and the capability to grow an unlimited number of accounts autonomously.",
            "Executed a UI/UX redesign for the mobile app, enhancing user experience and increasing user retention by 10%.",
          "Optimized database CRUD operations, implementing efficient procedures and reducing operation costs by 3%.",
          ], 
        },
        {
            id: 2,
            company: "Ginia Group",
            role: "Software Engineering Intern",
            duration: "June 2022 - August 2022",
            bulletPoints: [
            "Spearheaded research on cryptocurrency to assess its potential to send funds to overseas non-profit organizations.",
            "Wrote SQL queries to parse cryptocurrency transactions on Dune.com, identified activity trends to aid in research.",
            "Developed a full-stack web app for accepting cryptocurrency donations for 8 partner non-profits through Coinbase.",
            ],
        },
        {
            id: 3,
            company: "Freelance",
            role: "Frontend Designer/Developer",
            duration: "January 2018 - August 2021",
            bulletPoints: [
            "Designed and developed high-converting landing pages ensuring seamless user experience and driving increased customer engagement; companies saw on average an increase of 10% in registration and 5% in revenue.",
            "Launched 6 web apps to manage residential proxy subscriptions, on average increasing user retention by 5%.",
            "Implemented features to allow owners to set traffic limits, view traffic usage and users to view and cancel subscriptions.",
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

        <div className='overflow-x-auto w-full md:max-w-screen-lg flex flex-col mx-auto md:flex-row md:space-x-5 mx-5 p-6'>
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