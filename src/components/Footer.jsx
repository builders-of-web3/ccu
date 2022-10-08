import React from 'react';
import { bow3FullLogoBlack, twitterBlack } from "../assets";

const Footer = () => {
    return (
        <div className={'w-screen py-16 bg-white text-black'}>
            <div className={'w-[80vw] mx-auto grid md:grid-cols-5 gap-10 md:gap-20'}>

                <div className={'flex flex-col col-span-3 md:col-span-1 md:justify-between items-start md:items-center'}>
                    <img src={bow3FullLogoBlack} alt={''} className={'w-[120px] md:w-[200px]'} />
                    <a href="https://twitter.com/intent/tweet?hashtags=buidlersofweb3%2C&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Ehashtag%7Ctwgr%5Ebuidlersofweb3&text=Hey%20Guys%20%F0%9F%91%8B%2C%20I%20am%20gonna%20join%20%40buidlersofweb3%20on%20October%2029-30%20at%20Tal%20Kutir%2C%20Eco%20Space%2C%20Kolkata.%20Join%20me%20in%20%23BUIDLbyBow3">
                        <div className={'flex gap-3 items-center'}>
                            <img src={twitterBlack} alt={''} />
                            <div className={'text-xl font-semibold'}>#BUIDLbyBow3</div>
                        </div>
                    </a>
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
        </div >
    );
};

export default Footer;
