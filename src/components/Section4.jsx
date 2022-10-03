import React from 'react'
import { arrowWhite } from '../assets'

const Section4 = () => {
    return (
        <div className='text-white font-Inter flex my-[15vh]'>
            <a href="https://linktr.ee/buildersofweb3" target="_blank" rel="noopener noreferrer">
                <div className='font-Inter text-white text-9xl font-black italic drop-shadow-lg shadow-black'>
                    Join the
                    <div className='flex space-x-10'>
                        <div>
                            Community
                        </div>
                        <img className='w-20' src={arrowWhite} alt="arrow" />
                    </div>
                </div>
            </a>


        </div>
    )
}

export default Section4