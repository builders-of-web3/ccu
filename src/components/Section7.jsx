import React from 'react'
import { ajoyDas, ayanMajumdar, harshitAggarwal, manishKumarBarnwal, nadeemAhmad, rakeshSamui, samantakSaha, varsha } from '../assets'

const Section7 = () => {

    const team = [
        {
            name: 'Ayan Majumdar',
            image: ayanMajumdar
        },
        {
            name: "Ajoy Das",
            image: ajoyDas
        },
        {
            name: "Rakesh Samui",
            image: rakeshSamui
        },
        {
            name: "Harshit Aggarwal",
            image: harshitAggarwal
        },
        {
            name: "Varsha Gupta",
            image: varsha
        },
        {
            name: "Manish Kumar Barnwal",
            image: manishKumarBarnwal
        },
        {
            name: "Samantak Saha",
            image: samantakSaha
        },
        {
            name: "Nadeem Ahmad",
            image: nadeemAhmad
        }


    ]

    return (
        <div className='text-white font-Inter my-[15vh]'>

            <div className='font-Inter text-center text-white text-6xl font-black drop-shadow-lg shadow-black'>
                Core Team
            </div>

            <div className='grid grid-cols-4 gap-6 m-10'>

                {team.map((member) => (
                    <div className='flex flex-col items-center'>
                        <div className='bg-white hover:shadow-lg hover:shadow-[#1a1a3a] bg-cover w-[10rem] h-[10rem] rounded-full'>
                            <img src={member.image} alt={member.name} className='w-full h-full rounded-full' />
                        </div>
                        <div className='font-semibold text-2xl m-4'>
                            {member.name}
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Section7