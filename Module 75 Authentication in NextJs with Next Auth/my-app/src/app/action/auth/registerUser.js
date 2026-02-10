"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser =async (playload)=>{
    try{
        const result = await dbConnect(collectionNames.TEST_USER).insertOne(playload);
        return result;
    }
    catch(error){
        console.log(error);
        return null;
    }
}