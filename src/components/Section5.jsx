import React from 'react'
import { arrowblack } from '../assets'
import { AnimationOnScroll } from "react-animation-on-scroll";

const Section5 = () => {
    return (
        <div className='text-white font-Inter my-[15vh]'>

            <div className='flex flex-col justify-center items-center text-center'>
                <AnimationOnScroll animateOnce animateIn={"animate__fadeInDown"} duration={0.7} className='font-Inter  text-white text-6xl font-black italic drop-shadow-lg shadow-black'>
                    Get Involved
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} duration={0.7} delay={300} className='text-2xl font-medium m-6'>
                    Help make this year's event the best yet
                </AnimationOnScroll>
            </div>

            <div className='flex md:flex-row flex-col justify-between gap-10 pt-10'>
                <AnimationOnScroll animateOnce animateIn={"animate__fadeInLeft"} delay={500} className='bg-gradient-to-br from-white to-[#B9B3E6] rounded-2xl p-10 md:w-[50%]'>
                    <div className='text-black flex font-bold text-3xl justify-between'>
                        Speaker Application are now closed
                        <img className='w-7 mx-6' src={arrowblack} alt="arrowblack" />
                    </div>

                    <div className='text-black mt-[10rem] text-xl'>
                        Speakers will be announced soon ...
                    </div>

                </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn={"animate__fadeInRight"} delay={500} className='bg-gradient-to-br from-white to-[#B9B3E6] rounded-2xl p-10 md:w-[50%]'>
                    <div className='text-black flex font-bold text-3xl justify-between'>
                        Become a sponsor
                        <img className='w-7 mx-6' src={arrowblack} alt="arrowblack" />
                    </div>

                    <div className='text-black mt-[11rem] text-xl'>
                        Grow your reach by supporting an event that had seen a footfall of over 1500 people in 2021
                    </div>

                </AnimationOnScroll>
            </div>


        </div>
    )
}

export default Section5