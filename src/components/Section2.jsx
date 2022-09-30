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
        <div className='text-white font-Inter flex items-center justify-evenly my-[11vh]'>

            <div>
                <div className='font-Inter text-white text-7xl  w-[45vw] font-black italic drop-shadow-lg shadow-black'>
                    From {newName[1]} to <br /> {newName[2]}
                </div>
            </div>
            <div className='text-2xl box-content w-[22vw] font-medium mt-6 pt-[25vh]'>
                There's room for you at CCU Festival and BUIDL.
            </div>

        </div>
    )
}

export default Section2