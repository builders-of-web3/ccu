import React from 'react'

const Section7 = () => {

    const team = [
        "Ayan Majumdar",
        "Ajoy Das",
        "Rakesh Samui",
        "Harshit Aggarwal",
        "Varsha Gupta",
        "Manish Kumar Barnwal",
        "Samantak Saha",
        "Nadeem Ahmad",
    ]

    return (
        <div className='text-white font-Inter my-[15vh]'>

            <div className='font-Inter text-center text-white text-6xl font-black drop-shadow-lg shadow-black'>
                Core Team
            </div>

            <div className='grid grid-cols-4 gap-6 m-10'>
                {/* <div className='flex flex-col items-center'>
                    <div className='bg-white w-[10rem] h-[10rem] rounded-full'></div>
                    <div className='font-semibold text-2xl m-4'>
                        Ayan Majumdar
                    </div>
                </div> */}

                {team.map((member) => (
                    <div className='flex flex-col items-center'>
                        <div className='bg-white w-[10rem] h-[10rem] rounded-full'></div>
                        <div className='font-semibold text-2xl m-4'>
                            {member}
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Section7