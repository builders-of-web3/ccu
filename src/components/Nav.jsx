import React, { useState } from 'react'
import { BuilderOfWeb3Logo } from '../assets';
// import logo192 from './public/logo192.png';
//import Button from './Button';

const Nav = () => {
  let Links = [
    { name: "Agenda", link: "/" },
    { name: "Speakers", link: "/" },
    { name: "Sponsors", link: "/" },
    { name: "Community", link: "/" },
    { name: "Team", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className='shadow-md w-full fixed z-20 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          </span>
          <img className='w-[50px]' src={BuilderOfWeb3Logo} alt='logo' />
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>


        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800'>{link.name}</a>
              </li>
            ))
          }
        </ul>
        <a href="https://bit.ly/bow3-ccu-fest" target="_blank" rel="noopener noreferrer">
          <button className='bg-[#180497] text-white font-[Inter] py-2 px-6 rounded md:ml-8'>
            GET YOUR TICKETS NOW
          </button>
        </a>

      </div>
    </nav>
  )
}

export default Nav