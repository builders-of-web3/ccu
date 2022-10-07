import React from 'react'

import {  caldera,
  huladek,
  bitCulprit,
  HYPD,
  auli,
  calcuttaCacophony,
  Folk_Logo,
  innovatorsCoffee,
  Mastermentors,
  movingkolkata,
  neemans,
  new1,
  nkda_logo,
  siliconValley,
  Taj,
  Untitled,
  velocoty1,
  ventureCatalysts,
  WhatsApp,
  wings,
  yest,} from '../assets/sponsor'

const Section6 = () => {

    const sponsors = [
      caldera,
      huladek,
      bitCulprit,
      HYPD,
      auli,
      calcuttaCacophony,
      Folk_Logo,
      innovatorsCoffee,
      Mastermentors,
      movingkolkata,
      neemans,
      new1,
      nkda_logo,
      siliconValley,
      Taj,
      Untitled,
      velocoty1,
      ventureCatalysts,
      WhatsApp,
      wings,
      yest,
    ]

    return (
        <div className='text-white font-Inter my-[15vh]'>

            <div className='font-Inter text-center text-white text-6xl font-black italic drop-shadow-lg shadow-black'>
                Festival Partners
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 m-10'>
                {
                    sponsors.map((sponsor) => (
                        <div className='bg-white w-[8rem] md:w-[10rem] rounded-lg'>
                            <img src={sponsor} alt="sponsor" className='w-full h-full rounded-lg' />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Section6
