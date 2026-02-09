export const runtime = "nodejs";

import { ObjectId } from "mongodb";
import dbConnect from "@/lib/dbConnect";

/**
 * GET single student by ID
 * URL: /api/students/:id
 */
export async function GET(req, { params }) {

    const p = await params;
    const singleData = await dbConnect("students").findOne({ _id: new ObjectId(p.id) })
    return Response.json({ singleData });
}

/**
 * DELETE student by ID
 */
export async function DELETE(req, { params }) {
    const p = await params;
    const deleteData = await dbConnect("students").deleteOne({ _id: new ObjectId(p.id) })
    return Response.json({ deleteData });
}

/**
 * PATCH update student by ID
 */
export async function PATCH(req, { params }) {
    const p = await params;
    const postedData= await req.json();
    const filter= { _id: new ObjectId(p.id) };
    const updatedResponse = await dbConnect("students").updateOne(filter,
        {$set:{...postedData}},
        {upsert:true}
    );

    return Response.json({ updatedResponse });
}
