import CheckoutForm from '@/app/components/CheckoutForm';
import React from 'react';

const page = async ({ params }) => {
    const p = await params;
    const res = await fetch(`https://doctor-car-roan.vercel.app/api/service/${p.id}`);
    const data = await res.json();

    return (
        <div>
            {/* {p.id}
            {
                JSON.stringify(data)
            } */}
            <CheckoutForm data={data} />
        </div>
    );
};

export default page;