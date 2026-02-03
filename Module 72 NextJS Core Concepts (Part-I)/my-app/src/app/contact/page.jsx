"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
    const router =useRouter();

    const inLoggedIn =true;

    const handdleNavigation=()=>{
        if(inLoggedIn){
            router.push("/contact/social");
        }
        else{
            router.push("/");
        }
    }

    return (
        <div>
            This is contact page
            <p>
                <Link href="/contact/social">Social Media With Nested routes</Link>
            </p>
            <button type='button' onClick={handdleNavigation}>Click for navigate to social media if singin</button>
        </div>
    );
};

export default page;