import React, { useState } from 'react'

const Section3 = () => {

    const content = [
        "Ready to go from dreaming to doing? Learn how Web3 is disrupting the current Internet protocols , Applications of blockchain in different industry , What does Web 3.0 actually signifies. So you can understand how to prototype , BUIDL, launch and engage.",
        "Growth requires flexibility, scalability, creativity and power . Explore how Builders of Web3 can empower your teams and grow your projects - at any size company , in any industry and on any team.",
        "Great Ideas only get better when we share them. Discover how Builders of Web3 helps teams and Individuals  break down silos , create unique experiences efficiently and effectively together."
    ]

    const [contentNum, setContentNum] = useState(0);

    return (
        <div className='text-white font-Inter flex flex-col space-x-[10vw] justify-between my-[11vh]'>
            <div className='text-7xl font-black italic drop-shadow-lg shadow-black'>
                BUIDL
            </div>
            <div className={"flex justify-between"}>
                <div className='text-2xl font-medium flex gap-6'>
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
                <div className='text-2xl box-content w-[50%] font-medium'>
                    {content[contentNum]}
                </div>
            </div>

        </div>
    )
}

export default Section3