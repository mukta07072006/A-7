'use client'

import Image from 'next/image';
import Logo from '../assets/logo.png'
import { TiHome } from "react-icons/ti";
import { RiTimeLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathName = usePathname()


    return (
        <div className='bg-white py-3 flex md:flex-row flex-col gap-4 justify-center items-center  md:justify-between px-25'>
            <div className='container mx-auto'>
                <Image src={Logo} alt='logo'/>
            </div>
            <div className='flex gap-4 text-gray-500  rounded-sm'>

                <Link href="/" className={`flex gap-1 rounded-sm items-center px-2 ${pathName === '/' ? ' bg-[#244D3F] text-white': ''}`}><TiHome /> Home </Link>

                <Link href="/timeline" className={`flex gap-1 rounded-sm items-center px-2 ${pathName === '/timeline' ? ' bg-[#244D3F] text-white': ''}`}><RiTimeLine /> Timeline </Link>

                <Link href="/stats" className={`flex gap-1 rounded-sm items-center px-2 ${pathName === '/stats' ? ' bg-[#244D3F] text-white': ''}`}><BiStats /> Stats </Link>
                
                
            </div>
        </div>
    );
};

export default Navbar;