import React, { useState } from 'react'
import { BuilderOfWeb3Logo } from '../assets';
import {MenuRounded} from "@mui/icons-material";
// import logo192 from './public/logo192.png';
//import Button from './Button';
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  let Links = [
    { name: "Agenda", link: "#agenda" },
    { name: "Speakers", link: "#speakers" },
    { name: "Sponsors", link: "#sponsors" },
    { name: "Community", link: "#community" },
    { name: "Team", link: "#team" },
  ];
  let [open, setOpen] = useState(false);
  return (
      <nav className='shadow-md fixed z-20 top-0 w-screen'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

          <div className={'flex w-full md:w-fit justify-between items-center'}>
            <img className='w-[50px]' src={BuilderOfWeb3Logo} alt='logo' />
            <button onClick={() => setOpen(!open)} className='md:hidden text-black'>
              <MenuRounded />
            </button>
          </div>

          <div className={`text-xl text-gray-800 flex md:flex-row flex-col gap-8 items-center overflow-y-hidden ${open ? 'h-fit' : 'md:h-fit h-0'}`}>
            <>
              {
                Links.map((link) => (
                      <a href={link.link} >{link.name}</a>
                ))
              }
            </>
            <a className='bg-[#180497] text-white font-[Inter] py-2 px-6 rounded' href="https://bit.ly/bow3-ccu-fest" target="_blank" rel="noopener noreferrer">
              GET YOUR TICKETS NOW
            </a>
          </div>

        </div>
      </nav>
  )
}

export default Nav