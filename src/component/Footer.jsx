import Image from 'next/image';
import React from 'react';
import Logo from '../assets/logo-xl.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
const Footer = () => {
    return (
        <div className='bg-[#244D3F] px-25 py-18 text-center flex flex-col justify-center items-center'>
            <Image className='w-70 h-auto' src={Logo} alt='logo'></Image>
            <p className=' text-sm mt-3 text-gray-200'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className=' text-sm mt-3 text-gray-200'>Social Link</p>
           <div className='flex gap-3 mt-3 w-30 justify-center'>
             <Image src={Facebook} alt='icon'></Image>
            <Image src={Instagram} alt=''></Image>
            <Image src={Twitter} alt=''></Image>
           </div>
           <hr  className='my-4'/>
           
        </div>
    );
};

export default Footer;