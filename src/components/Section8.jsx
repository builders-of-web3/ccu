import React from 'react'
import { abhranilMondal, himanshuRai, rajdipBhattacharya, sawanBhattacahrya } from '../assets'

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
        }
    ]

    return (
        <div className='text-white font-Inter my-[15vh]'>

            <div className='font-Inter text-center text-white text-5xl md:text-6xl font-black drop-shadow-lg shadow-black'>
                Contributors
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
                {team.map((member) => (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-col items-center'>
                            <div className='bg-white hover:shadow-lg hover:shadow-[#1a1a3a] bg-cover w-[8rem] md:w-[10rem] rounded-full'>
                                <img src={member.image} alt={member.name} className='w-full h-full rounded-full' />
                            </div>
                            <div className='font-semibold text-2xl m-4 text-center'>
                                {member.name}
                            </div>
                        </div>
                    </a>

                ))}

            </div>

        </div>
    )
}

export default Section8