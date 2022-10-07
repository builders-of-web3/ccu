import React from 'react'
import { arrowWhite } from '../assets'

const Section4 = () => {
    return (
        <div className='text-white font-Inter flex my-[15vh] place-self-start'>
            <a href="https://linktr.ee/buildersofweb3" target="_blank" rel="noopener noreferrer"
               className='font-Inter text-white text-5xl md:text-9xl font-black italic drop-shadow-lg shadow-black'>
                Join the
                <div className='flex space-x-10'>
                    <div>
                        Community
                    </div>
                    <img className='w-10 md:w-20' src={arrowWhite} alt="arrow" />
                </div>
            </a>


        </div>
    )
}

export default Section4