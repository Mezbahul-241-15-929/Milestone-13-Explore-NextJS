import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
    const collection = await dbConnect("students");
    const data = await collection.find({}).toArray();

    return Response.json({ data });
}

export async function POST(req) {
    const postedData = await req.json();
    const collection = await dbConnect("students");

    const result = await collection.insertOne(postedData);
    revalidatePath("/products")

    return Response.json({ result });
}
