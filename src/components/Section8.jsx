import React from 'react'
import { abhranilMondal, himanshuRai, rajdipBhattacharya, sawanBhattacahrya, Jyotirmoy,Sumita,Swatilakha } from '../assets'
import {AnimationOnScroll} from "react-animation-on-scroll";

const Section8 = () => {

    const team = [
        {
            name: 'Abhranil Mondal',
            image: abhranilMondal,
            linkedin: 'https://www.linkedin.com/in/abhranil-mondal-0b1b1b1b1/',
        },
        {
            name: "Rajdip Bhattacharya",
            image: rajdipBhattacharya,
            linkedin: 'https://www.linkedin.com/in/rajdip-bhattacharya-581119232/',
        },
        {
            name: "Sawan Bhattacharya",
            image: sawanBhattacahrya,
            linkedin: 'https://www.linkedin.com/in/sawan-bhattacharya/',
        },
        {
            name: "Himanshu Rai",
            image: himanshuRai,
            linkedin: 'https://www.linkedin.com/in/himanshu-rai-5599a11b8',
        },
        {
            name: "Jyotirmoy Roy",
            image: Jyotirmoy,
            linkedin: 'https://www.linkedin.com/in/jyotirmoyroy69/',
        },
        {
            name: "Swatilakha Saha",
            image: Swatilakha,
            linkedin: 'https://www.linkedin.com/in/swati-lakha-9046331a6',
        },
        {
            name: "Sumita Pathak",
            image: Sumita,
            linkedin: 'https://www.linkedin.com/in/sumita-pathak-91699a215',
        },
    ]

    return (
        <div className='text-white font-Inter my-[15vh]'>

            <AnimationOnScroll animateOnce animateIn={"animate__fadeInDown"} duration={0.7} className='font-Inter text-center text-white text-5xl md:text-6xl font-black drop-shadow-lg shadow-black'>
                Contributors
            </AnimationOnScroll>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
                {team.map((member, index) => (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} duration={0.7} delay={index*100+300} className='flex flex-col items-center'>
                            <div className='bg-white hover:shadow-lg hover:shadow-[#1a1a3a] bg-cover w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] rounded-full'>
                                <img src={member.image} alt={member.name} className='w-full h-full rounded-full' />
                            </div>
                            <div className='font-semibold text-2xl m-4 text-center'>
                                {member.name}
                            </div>
                        </AnimationOnScroll>
                    </a>

                ))}

            </div>

        </div>
    )
}

export default Section8
