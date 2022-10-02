import React from 'react';
import {bow3FullLogoBlack, twitterBlack} from "../assets";

const Footer = () => {
    return (
        <div className={'w-screen py-16 bg-white text-black'}>
            <div className={'w-[80vw] mx-auto grid grid-cols-5 gap-20'}>
                <div className={'flex flex-col justify-between'}>
                    <img src={bow3FullLogoBlack} alt={''} className={'w-[200px]'}/>
                    <div className={'flex gap-3'}>
                        <img src={twitterBlack} alt={''}/>
                        <div className={'text-xl font-semibold'}>#BUIDLbyBow3</div>
                    </div>
                </div>
                <div className={'flex flex-col gap-5 text-xl'}>
                    <a href={'#'}>Agenda</a>
                    <a href={'#'}>Speakers</a>
                    <a href={'#'}>Sponsors</a>
                    <a href={'#'}>Community</a>
                    <a href={'#'}>Team</a>
                </div>
                <div className={'flex flex-col gap-5 text-xl'}>
                    <a href={'#'}>Buy Tickets</a>
                    <a href={'#'}>CCU Festival</a>
                    <a href={'#'}>Project MCRA</a>
                    <a href={'#'}>OffBeat CCU</a>
                    <a href={'#'}>Contact Us</a>
                </div>
                <div className={'col-span-2'}>
                    <div className={'text-xl font-semibold'}>Stay up-to-date on all things BUIDL & Builders of Web3</div>
                    <input
                        className={'rounded-lg shadow-inner border-black border-2 outline-none p-3 mt-5 w-full'}
                        type={'email'}
                        placeholder={'Enter your email'}
                    />
                    <button className={'p-2 text-white bg-[#210CAE] font-bold text-lg rounded-lg mt-3'}>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
