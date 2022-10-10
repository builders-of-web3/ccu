import React from 'react'
import {
    Footer,
    Hero,
    Nav,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
} from '../components'

const Home = () => {
  return (
    <div className='bg-[#210CAE] text-white font-Inter overflow-y-hidden'>

      <Nav />
      <Hero />
      <div className='w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto flex flex-col justify-around items-center overflow-y-hidden'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
      <Footer />

    </div>

  )
}

export default Home