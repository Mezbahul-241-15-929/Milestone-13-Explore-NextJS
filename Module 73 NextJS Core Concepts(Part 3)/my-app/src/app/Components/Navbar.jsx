import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className=''>
            <ul className='flex justify-center gap-10'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/image">Image Optimize</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/products/add">Add Product</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;