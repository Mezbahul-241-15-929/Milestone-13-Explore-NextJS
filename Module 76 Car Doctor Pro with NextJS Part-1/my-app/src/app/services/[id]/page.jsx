import ServicesBanner from '@/app/components/ServicesBanner';
import dbConnect, { colletionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

const page = async ({ params }) => {
    const p = await params;

    const serviceColletion = dbConnect(colletionNameObj.servicescoll);
    const data = await serviceColletion.findOne({_id: new ObjectId(p.id)});

    return (
        <div>
            <ServicesBanner/>
            {p.id}
            {
                JSON.stringify(data)
            }
        </div>
    );
};

export default page;