import React from 'react'

import {caldera, huladek, bitCulprit, BOW3, HYPD} from '../assets/sponsor'

const Section6 = () => {

    const sponsors = [
        caldera,
        huladek,
        bitCulprit,
        BOW3,
        HYPD,
    ]

    return (
        <div className='text-white font-Inter my-[15vh]'>

            <div className='font-Inter text-center text-white text-6xl font-black italic drop-shadow-lg shadow-black'>
                Festival Partners
            </div>

            <div className='grid grid-cols-6 gap-6 m-10'>
                {
                    sponsors.map((sponsor) => (
                        <div className='bg-white w-[10rem] h-[10rem] rounded-lg'>
                            <img src={sponsor} alt="sponsor" className='w-full h-full rounded-lg' />
                        </div>
                    ))
                }
                
            </div>

        </div>
    )
}

export default Section6