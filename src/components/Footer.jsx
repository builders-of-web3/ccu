import React from 'react';
import { bow3FullLogoBlack, twitterBlack } from "../assets";
import {Instagram, LinkedIn, Telegram, Twitter} from "@mui/icons-material";

const Footer = () => {
    const links = [
        { name: "Agenda", link: "#agenda" },
        { name: "Speakers", link: "#speakers" },
        { name: "Sponsors", link: "#sponsors" },
        { name: "Community", link: "#community" },
        { name: "Team", link: "#team" },
    ];

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

                <div className={'flex flex-col gap-5 text-sm md:text-xl'}>
                    {
                        links.map((link) => (
                            <a href={link.link} >{link.name}</a>
                        ))
                    }
                </div>

                <div className={'flex flex-col gap-5 text-sm md:text-xl'}>
                    <a href={'https://bit.ly/bow3-ccu-fest'}>Buy Tickets</a>
                    <a href={'http://mcra.in/ccu'}>CCU Festival</a>
                    <a href={'https://www.makecalcuttarelevantagain.com/'}>Project MCRA</a>
                    <a href={'https://www.offbeatccu.com/'}>OffBeat CCU</a>
                    <a href={'mailto:buidlersofweb3@gamil.com'}>Contact Us</a>
                </div>

                <div className={'col-span-2'}>
                    <div className={'text-xl font-semibold'}>Join our socials</div>
                    <div className={'flex gap-1 mt-4'}>
                        <a href={'https://twitter.com/buidlersofweb3'} rel={"noreferrer noopener"}>
                            <img src={'https://img.icons8.com/color/32/000000/twitter-logo.png'} alt={''} />
                        </a>
                        <a href={'https://www.instagram.com/buildersofweb3/'} rel={"noreferrer noopener"}>
                            <img src={'https://img.icons8.com/color/32/000000/instagram-logo.png'} alt={''} />
                        </a>
                        <a href={'https://t.me/BOWeb3'} rel={"noreferrer noopener"}>
                            <Telegram fontSize={'large'} />
                        </a>
                        <a href={'https://discord.gg/7HC2JtM9'} rel={"noreferrer noopener"}>
                            <img src={'https://img.icons8.com/color/32/000000/discord-logo.png'} alt={''} />
                        </a>
                        <a href={'https://www.linkedin.com/company/buildersofweb3/'} rel={"noreferrer noopener"}>
                            <img src={'https://img.icons8.com/color/32/000000/linkedin-logo.png'} alt={''} />
                        </a>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Footer;
