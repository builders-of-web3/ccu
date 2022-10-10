import React, { useCallback, useEffect, useState } from 'react'
import { AnimationOnScroll } from "react-animation-on-scroll";

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
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        // const textWrapper = document.querySelector('.ml12');
        // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        // window.anime.timeline({loop: true})
        //     .add({
        //         targets: '.ml12 .letter',
        //         translateX: [40,0],
        //         translateZ: 0,
        //         opacity: [0,1],
        //         easing: "easeOutExpo",
        //         duration: 1200,
        //         delay: (el, i) => 500 + 30 * i
        //     }).add({
        //     targets: '.ml12 .letter',
        //     translateX: [0,-30],
        //     opacity: [1,0],
        //     easing: "easeInExpo",
        //     duration: 1100,
        //     delay: (el, i) => 100 + 30 * i
        // });
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <div className='text-white font-Inter flex md:flex-row flex-col my-[11vh] text-left md:h-[300px] gap-16'>

            <AnimationOnScroll className='ml12 text-4xl md:text-6xl italic md:w-[50%] place-self-start' animateOnce animateIn={"animate__fadeInLeft"} >
                    From <span className='text-[#FFC700]'> {Object.values(newName)[0]} </span> to <span className='text-[#FFC700]'> {Object.values(newName)[1]} </span>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn={"animate__fadeInUpBig"} animateOnce className='text-2xl box-content md:w-[22vw] font-medium place-self-end'>
                There's room for you at CCU Festival and BUIDL.
            </AnimationOnScroll>

        </div>
    )
}

export default Section2