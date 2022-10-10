import React from 'react';
import { heroBg, bow3FullLogoWhite } from "../assets";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Hero = () => {
    return (
        <div className={'h-screen w-screen bg-cover bg-no-repeat flex items-center mt-[100px] md:mt-0'} style={{ backgroundImage: `url(${heroBg})` }}>
            <div className={'flex md:flex-row flex-col w-[90vw] md:w-[80vw] mx-auto md:items-end justify-around h-fit gap-16'}>
                <div className={'flex flex-col gap-16'}>
                    <AnimationOnScroll animateIn="animate__slideInLeft" duration={0.6} animateOnce>
                        <div className={'gap-5 items-end flex'}>
                            <img src={bow3FullLogoWhite} alt={''} />
                            <div className={'text-2xl italic'}>presents</div>
                        </div>
                    </AnimationOnScroll>
                    <div className={'flex flex-col gap-10 italic'}>
                        <AnimationOnScroll delay={400} animateIn={"animate__bounceInRight"} animateOnce>
                            <div className={'text-8xl md:text-9xl font-extrabold'}>BUIDL</div>
                        </AnimationOnScroll>
                        <AnimationOnScroll delay={600} animateIn={"animate__fadeInUpBig"} animateOnce>
                            <div>
                                <div className={'text-2xl md:text-3xl font-semibold'}>Join us as we celebrate</div>
                                <div className={'text-2xl md:text-3xl font-semibold'}>Calcutta like never before</div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <AnimationOnScroll delay={800} animateIn={"animate__fadeInUpBig"} animateOnce>
                        <div>
                            <div className={'text-xl'}>in collaboration with</div>
                            <div className={'text-3xl font-semibold italic'}>Make Calcutta Relevant Again</div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className={'flex flex-col gap-20 '}>
                    <a href="https://goo.gl/maps/3Y72yiKP2riN5EeV9" target="_blank" rel="noopener noreferrer">
                        <AnimationOnScroll delay={400} animateIn={"animate__fadeInRight"} animateOnce>
                            <div className='cursor-pointer'>
                                <div className={'text-lg md:text-xl'}>WHEN AND WHERE</div>
                                <div className={'text-2xl md:text-3xl mt-2'}>October 29-30</div>
                                <div className={'text-2xl md:text-3xl'}>Tal Kutir, Eco Space, Kolkata</div>
                            </div>
                        </AnimationOnScroll>
                    </a>

                    <AnimationOnScroll delay={600} animateIn={"animate__fadeInRight"} animateOnce>
                        <a href="https://bit.ly/bow3-ccu-fest" rel="noopener noreferrer" target='_blank' className={'bg-white text-gray-800 rounded-md px-4 py-3 w-fit text-xl md:text-2xl font-bold mx-auto md:mx-0'} >
                            GET YOUR TICKETS NOW
                        </a>
                    </AnimationOnScroll>

                </div>
            </div>
        </div>
    );
};

export default Hero;
