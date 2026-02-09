"use server";

import dbConnect from "@/lib/dbConnect";

export const registerUser =async (playload)=>{
    try{
        const result = await dbConnect("students").insertOne(playload);
        return result;
    }
    catch(error){
        console.log(error);
        return null;
    }
}