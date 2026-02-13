"use server";

import bcrypt from "bcrypt";
import dbConnect, { colletionNameObj } from "@/lib/dbConnect";

export const signupUser = async (payload) => {
    const userCollection = dbConnect(colletionNameObj.userColletion);
    const { email, password } = payload;

    if (!email || !password) {
        return { success: false };
    }

    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
        return { success: false, message: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userCollection.insertOne({
        ...payload,
        password: hashedPassword
    });

    return {
        acknowledged: result.acknowledged,
        insertedId: result.insertedId
    };
};
