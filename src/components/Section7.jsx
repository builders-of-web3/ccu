import React from 'react'
import { ajoyDas, ayanMajumdar, harshitAggarwal, manishKumarBarnwal, nadeemAhmad, rakeshSamui, samantakSaha, varsha } from '../assets'

const Section7 = () => {

    const team = [
        {
            name: 'Ayan Majumdar',
            image: ayanMajumdar,
            linkdin: 'https://www.linkedin.com/in/imayanmajumdar/',
        },
        {
            name: "Ajoy Das",
            image: ajoyDas,
            linkdin: 'https://www.linkedin.com/in/ajoy-das-5542b5217/'
        },
        {
            name: "Rakesh Samui",
            image: rakeshSamui,
            linkdin: 'https://www.linkedin.com/in/rakesh-samui-69aa65192/'
        },
        {
            name: "Harshit Aggarwal",
            image: harshitAggarwal,
            linkdin: 'https://www.linkedin.com/in/harshit-aggarwal-a6705b1a2'
        },
        {
            name: "Varsha Gupta",
            image: varsha,
            linkdin: 'https://www.linkedin.com/in/varsha-gupta-9022621b1/'
        },
        {
            name: "Manish Kumar Barnwal",
            image: manishKumarBarnwal,
            linkdin: 'https://www.linkedin.com/in/imanishbarnwal/'
        },
        {
            name: "Samantak Saha",
            image: samantakSaha,
            linkdin: 'https://www.linkedin.com/in/samantaksaha/'
        },
        {
            name: "Nadeem Ahmad",
            image: nadeemAhmad,
            linkdin: 'https://www.linkedin.com/in/nadeem-ahmad-624b86168/'
        }


    ]

    return (
        <div className='text-white font-Inter my-[15vh]'>

            <div className='font-Inter text-center text-white text-5xl md:text-6xl font-black drop-shadow-lg shadow-black'>
                Core Team
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-10'>

                {team.map((member) => (
                    <a href={member.linkdin} target="_blank" rel="noopener noreferrer">
                        <div className='flex flex-col items-center'>
                            <div className='bg-white hover:shadow-lg hover:shadow-[#1a1a3a] bg-cover w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] rounded-full'>
                                <img src={member.image} alt={member.name} className='w-full h-full rounded-full' />
                            </div>
                            <div className='font-semibold text-center text-2xl m-4'>
                                {member.name}
                            </div>
                        </div>
                    </a>

                ))}

            </div>

        </div>
    )
}

export default Section7