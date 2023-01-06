import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll";
const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'About'
        },
        {
            id: 2,
            link: 'Projects'
        },
        {
            id: 3,
            link: 'Experience'
        },
        {
            id: 4,
            link: 'Contact'
        },
    ]


  return (
    <nav class="bg-zinc-900 sticky z-50 top-0 flex justify-between flex-wrap items-center h-[80px] w-full px-4 text-base text-white">
        <div class="md:mx-auto hidden w-full md:flex items-center md:w-auto" id="menu">
            <ul class="text-base text-zinc-500 md:flex md:justify-between md:pt-0">
                {links.map(({id, link}) => (
                    <li key={id}><a href="#aboutme"class="md:px-12 block hover:text-white hover:scale-105 duration-200">
                        <Link to={link} smooth duration={500}>
                       {link} 
                       </Link>
                    </a></li>
                ))}
            </ul>
            
        </div>
        <div onClick = {()=>setNav(!nav)} className = "md:hidden cursor-pointer pr-4 z-10">
            {nav ? <FaTimes size={20}/> : <FaBars size = {20}/>}
        </div>
        
        {nav && (
        <ul className = "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-zinc-900">
                {links.map(({id, link}) => (
                    <li key={id}><a href="#aboutme"class="text-gray-500 py-2 cursor-pointer text-xl block hover:text-white hover:scale-105 duration-200">
                        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>
                        {link}
                        </Link>
                    </a></li>
                ))}
        </ul>
        )}

    </nav>
  )
}

export default NavBar