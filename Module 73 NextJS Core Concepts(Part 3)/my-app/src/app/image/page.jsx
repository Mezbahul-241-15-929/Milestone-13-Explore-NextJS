import Image from 'next/image';
import React from 'react';
import { Roboto } from "next/font/google";

const roboto= Roboto({
  weight:["400"],
  subsets: ["latin"]
})


const page = () => {
    return (
        <div>
            <h1 className={roboto.className}>This is Heading</h1>
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHUUKugl91N4C2dE6zyH2QwngkxpvPCRaaw&s"
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </div>
    );
};

export default page;