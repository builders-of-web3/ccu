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
    Section9
} from '../components'

const Home = () => {
  return (
    <div className='bg-[#210CAE] text-white font-Inter'>

      <Nav />
      <Hero />
      <div className='w-[80vw] mx-auto flex flex-col justify-around items-center '>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </div>
      <Footer />

    </div>

  )
}

export default Home