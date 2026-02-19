import CheckoutForm from '@/app/components/CheckoutForm';
import ServicesBanner from '@/app/components/ServicesBanner';
import Link from 'next/link';

import React from 'react';

const page = async ({ params }) => {
    const p = await params;


    const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
    const data = await res.json();

    return (
        <div>
            <ServicesBanner />

            {p.id}
            {
                JSON.stringify(data)
            }
            <section className="container mx-auto px-4 py-10 ">
                <h1 className='text-4xl font-bold mb-3'>{data.title}</h1>
                <div className='grid grid-cols-4 gap-5'>
                    <div className='col-span-3'>
                        <img src={data.img} alt="" className='w-full' />
                    </div>
                    <div className=''>
                        <Link href={`/checkout/${data._id}`} ><button className='btn w-full btn-primary'>Checkout</button>
                        </Link>
                        <p className='text-2xl font-bold text-center'>Price: ${data.price}</p>
                    </div>
                </div>
                
            </section>
            
        </div>
    );
};

export default page;