import React, { useCallback, useEffect, useState } from 'react'

const Section2 = () => {

    const names = [
        {
            1: "Web2",
            2: "Web3 natives"
        },
        {
            1: "non-crypto",
            2: "crypto aware"
        },
        {
            1: "solopreneurs",
            2: "scaling teams"
        },
        {
            1: "Marketing leads",
            2: "Gamers"
        },
        {
            1: "Fitness freaks",
            2: "Artists"
        }
    ]

    const [newName, setnewName] = useState(names[0]);

    
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])


    return (
        <div className='text-white font-Inter flex md:flex-row flex-col my-[11vh] text-left md:h-[300px] gap-16'>

            <div className='text-6xl md:text-7xl font-black italic drop-shadow-lg shadow-black md:w-[50%] place-self-start'>
                From <span className='text-[#FFC700]'> {Object.values(newName)[0]} </span> to <span className='text-[#FFC700]'> {Object.values(newName)[1]} </span>
            </div>
            <div className='text-2xl box-content md:w-[22vw] font-medium place-self-end'>
                There's room for you at CCU Festival and BUIDL.
            </div>

        </div>
    )
}

export default Section2