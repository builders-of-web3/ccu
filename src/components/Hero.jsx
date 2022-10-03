import React from 'react';
import { heroBg, bow3FullLogoWhite } from "../assets";

const Hero = () => {
    return (
        <div className={'h-screen w-screen bg-cover bg-no-repeat flex items-center'} style={{ backgroundImage: `url(${heroBg})` }}>
            <div className={'flex w-[80vw] mx-auto items-end justify-around h-fit'}>
                <div className={'flex flex-col gap-16'}>
                    <div className={'flex gap-5 items-end'}>
                        <img src={bow3FullLogoWhite} alt={''} />
                        <div className={'text-2xl italic'}>presents</div>
                    </div>
                    <div className={'flex flex-col gap-10 italic'}>
                        <div className={'text-9xl font-extrabold'}>BUIDL</div>
                        <div>
                            <div className={'text-3xl font-semibold'}>Join us as we celebrate</div>
                            <div className={'text-3xl font-semibold'}>Calcutta like never before</div>
                        </div>
                    </div>
                    <div>
                        <div className={'text-xl'}>in collaboration with</div>
                        <div className={'text-3xl font-semibold italic'}>Make Calcutta Relevant Again</div>
                    </div>
                </div>
                <div className={'flex flex-col gap-20 '}>
                    <a href="https://goo.gl/maps/3Y72yiKP2riN5EeV9" target="_blank" rel="noopener noreferrer">
                        <div className='cursor-pointer'>
                            <div className={'text-xl'}>WHEN AND WHERE</div>
                            <div className={'text-3xl mt-2'}>October 29-30</div>
                            <div className={'text-3xl'}>Tal Kutir, Eco Space, Kolkata</div>
                        </div>
                    </a>

                    <a href="https://bit.ly/bow3-ccu-fest" rel="noopener noreferrer" target='_blank' >
                        <button className={'bg-white text-gray-800 rounded-md px-4 py-3 w-fit text-2xl font-bold'}>
                            GET YOUR TICKETS NOW
                        </button>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Hero;
