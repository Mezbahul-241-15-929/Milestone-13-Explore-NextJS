import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-center bg-slate-600'>
                <ul className='flex justify-between w-1/2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;