import dbConnect, { colletionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
    const p = await params;

    const serviceColletion = dbConnect(colletionNameObj.servicescoll);
    const data = await serviceColletion.findOne({ _id: new ObjectId(p.id) });
    return NextResponse.json(data);
}