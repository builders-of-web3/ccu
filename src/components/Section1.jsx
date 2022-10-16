import React from 'react'
import { AnimationOnScroll } from "react-animation-on-scroll";

const Section1 = () => {
    return (
        <div id={"agenda"} className='text-white font-Inter flex md:flex-row flex-col items-start md:items-center justify-between my-[11vh] gap-16'>

            <div className={"md:w-[50%]"}>
                <AnimationOnScroll animateIn={"animate__fadeIn"} animateOnce>
                    <div className='font-Inter text-white text-6xl md:text-7xl font-black italic drop-shadow-lg shadow-black'>
                        More <br /> than just a <br /> festival
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll delay={500} animateIn={"animate__fadeInUp"} animateOnce>
                    <div className='text-xl md:text-2xl font-medium mt-6'>
                        At CCU festival (BUIDL) you won't just passively listen to panels. You'll….
                    </div>
                </AnimationOnScroll>
            </div>


            <div className='space-y-6 md:w-[50%]'>
                <div className='flex'>
                    <AnimationOnScroll className='font-extrabold text-4xl mx-6' animateIn={"animate__fadeInDown"} animateOnce delay={800}>
                        1.
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn={"animate__slideInRight"} animateOnce delay={800}>
                        Be the First to experience such an event in Calcutta which is focused on disrupting and
                        spreading awareness about Web3, Sustainability and Innovation.
                    </AnimationOnScroll>
                </div>
                <div className='flex'>
                    <AnimationOnScroll className='font-extrabold text-4xl mx-6' animateIn={"animate__fadeInDown"} animateOnce delay={1000}>
                        2.
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn={"animate__slideInRight"} animateOnce delay={1000}>
                        Connect with a thriving community of Web 3 aware Individuals , industry leaders and CXOs to
                        share expertise, get industry Insights, swap stories and meet new people.
                    </AnimationOnScroll>
                </div>
                <div className='flex'>
                    <AnimationOnScroll className='font-extrabold text-4xl mx-6' animateIn={"animate__fadeInDown"} animateOnce delay={1200}>
                        3.
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn={"animate__slideInRight"} animateOnce delay={1200}>
                        Celebrate the day backed by leaders , creators and most prominent figures of Calcutta on
                        taking Calcutta and Web3 in Calcutta Forward.
                    </AnimationOnScroll>
                </div>
            </div>

        </div>
    )
}

export default Section1