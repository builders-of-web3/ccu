import React from 'react'
import { arrowblack } from '../assets'

const Section5 = () => {
    return (
        <div className='text-white font-Inter my-[15vh]'>

            <div className='flex flex-col justify-center items-center text-center'>
                <div className='font-Inter  text-white text-6xl font-black italic drop-shadow-lg shadow-black'>
                    Get Involved
                </div>
                <div className='text-2xl font-medium m-6'>
                    Help make this year's event the best yet
                </div>
            </div>

            <div className='flex justify-between space-x-[10vw] pt-10'>
                <div className='bg-gradient-to-br from-white to-[#B9B3E6]  w-[40rem] h-[23rem]  rounded-2xl p-10'>
                    <div className='text-black flex font-bold text-3xl justify-between'>
                        Speaker Application are now closed
                        <img className='w-7 mx-6' src={arrowblack} alt="arrowblack" />
                    </div>

                    <div className='text-black mt-[10rem] text-xl'>
                        Speakers will be announced soon ...
                    </div>

                </div>
                <div className='bg-gradient-to-br from-white to-[#B9B3E6]  w-[40rem] h-[23rem]  rounded-2xl p-10'>
                    <div className='text-black flex font-bold text-3xl justify-between'>
                        Become a sponsor
                        <img className='w-7 mx-6' src={arrowblack} alt="arrowblack" />
                    </div>

                    <div className='text-black mt-[11rem] text-xl'>
                        Grow your reach by supporting an event that had seen a footfall of over 1500 people in 2021
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Section5