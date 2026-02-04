"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname, pathname.includes("dashboard"));
    if (!pathname.includes("dashboard")) {
        return (
            <div>
                <nav className='flex justify-center bg-slate-600'>
                    <ul className='flex justify-between w-1/2'>
                        <Link href="/"><li>Home</li></Link>
                        <Link href="/about"><li>About</li></Link>
                        <Link href="/contact"><li>Contact</li></Link>
                        <Link href="/services"><li>Services</li></Link>
                        <Link href="/user-dashboard"><li>User-Dashboard</li></Link>
                    </ul>
                </nav>
            </div>
        );
    }
    else
        return <></>



};

export default Navbar;