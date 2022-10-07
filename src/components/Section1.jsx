import React from 'react'

const Section1 = () => {
  return (
    <div className='text-white font-Inter flex md:flex-row flex-col items-start md:items-center justify-between my-[11vh] gap-16'>

      <div className={"md:w-[50%]"}>
        <div className='font-Inter text-white text-6xl md:text-7xl font-black italic drop-shadow-lg shadow-black'>
          More <br /> than just a <br /> festival
        </div>

        <div className='text-xl md:text-2xl font-medium mt-6'>
          At CCU festival (BUIDL) you won't just <br /> passively listen to panels. You'll….
        </div>
      </div>


      <div className='space-y-6'>
        <div className='flex'>
          <div className='font-extrabold text-4xl mx-6'>
            1.
          </div>
          <div>
            Be the First to experience such an event in Calcutta which is focused on disrupting and <br />
            spreading awareness about Web3, Sustainability and Innovation.
          </div>
        </div>
        <div className='flex'>
          <div className='font-extrabold text-4xl mx-6'>
            2.
          </div>
          <div>
            Connect with a thriving community of Web 3 aware Individuals , industry leaders and CXOs to <br />
            share expertise, get industry Insights, swap stories and meet new people.
          </div>
        </div>
        <div className='flex'>
          <div className='font-extrabold text-4xl mx-6'>
            3.
          </div>
          <div>
            Celebrate the day backed by leaders , creators and most prominent figures of Calcutta on <br />
            taking Calcutta and Web3 in Calcutta Forward.

          </div>
        </div>
      </div>

    </div>
  )
}

export default Section1