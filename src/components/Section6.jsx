import React from 'react'
import { AnimationOnScroll } from "react-animation-on-scroll";

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
  yest,
  visual,
  smoke,
  saday,} from '../assets/sponsor'

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
      visual,
      smoke,
      saday,
    ]

    return (
        <div className='text-white font-Inter my-[15vh]'>

            <AnimationOnScroll animateOnce animateIn={"animate__fadeInDown"} duration={0.7} className='font-Inter text-center text-white text-6xl font-black italic drop-shadow-lg shadow-black'>
                Festival Partners
            </AnimationOnScroll>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 m-10'>
                {
                    sponsors.map((sponsor, index) => (
                        <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} duration={0.7} delay={index*100+300} className='bg-white w-[8rem] md:w-[10rem] h-[8rem] md:h-[10rem] rounded-lg p-5'>
                            <img src={sponsor} alt="sponsor" className='rounded-lg object-contain w-full h-full' />
                        </AnimationOnScroll>
                    ))
                }

            </div>

        </div>
    )
}

export default Section6
