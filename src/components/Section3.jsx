import React, { useState } from 'react'

const Section3 = () => {

    const content = [
        "Ready to go from dreaming to doing? Learn how Web3 is disrupting the current Internet protocols , Applications of blockchain in different industry , What does Web 3.0 actually signifies. So you can understand how to prototype , BUIDL, launch and engage.",
        "Growth requires flexibility, scalability, creativity and power . Explore how Builders of Web3 can empower your teams and grow your projects - at any size company , in any industry and on any team.",
        "Great Ideas only get better when we share them. Discover how Builders of Web3 helps teams and Individuals  break down silos , create unique experiences efficiently and effectively together."
    ]

    const [contentNum, setContentNum] = useState(0);

    return (
        <div className='text-white font-Inter flex justify-between my-[11vh]'>

            <div>
                <div className='font-Inter text-white text-7xl font-black italic drop-shadow-lg shadow-black'>
                    BUIDL
                </div>
                <div className='text-2xl font-medium mt-6 flex space-x-8'>
                    <div className={`cursor-pointer ${contentNum === 0 ? "font-extrabold": ""}`} onClick={() => setContentNum(0)}>
                        BUIDL
                    </div>
                    <div className={`cursor-pointer ${contentNum === 1 ? "font-extrabold": ""}`} onClick={() => setContentNum(1)}>
                        Grow
                    </div>
                    <div className={`cursor-pointer ${contentNum === 2 ? "font-extrabold": ""}`} onClick={() => setContentNum(2)}>
                        Collaborate
                    </div>
                </div>
            </div>
            <div className='text-2xl box-content w-[22vw] font-medium mt-6 pt-[9vh]'>
                {content[contentNum]}

            </div>

        </div>
    )
}

export default Section3