import React from 'react'
import { arrowWhite } from '../assets'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Section4 = () => {
    return (
        <div id={"community"} className='text-white font-Inter flex my-[15vh] place-self-start'>
            <a href="https://linktr.ee/buildersofweb3" target="_blank" rel="noopener noreferrer"
               className='font-Inter text-white text-5xl md:text-9xl font-black italic drop-shadow-lg shadow-black'>
                <AnimationOnScroll animateOnce animateIn={"animate__lightSpeedInLeft"}>
                    Join the
                </AnimationOnScroll>
                <div className='flex space-x-10'>
                    <AnimationOnScroll animateOnce animateIn={"animate__lightSpeedInLeft"} delay={300}>
                        Community
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce animateIn={"animate__fadeIn"} delay={300}>
                        <img className='w-10 md:w-20' src={arrowWhite} alt="arrow" />
                    </AnimationOnScroll>
                </div>
            </a>


        </div>
    )
}

export default Section4