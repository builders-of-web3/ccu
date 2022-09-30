import React from 'react'
import { Nav ,Section1, Section2, Section3, Section4, Section5 } from '../components'

const Home = () => {
  return (
    <div className='bg-[#210CAE]'>

      <Nav />
      <div className='mx-[10vw] flex flex-col justify-between '>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>


    </div>

  )
}

export default Home