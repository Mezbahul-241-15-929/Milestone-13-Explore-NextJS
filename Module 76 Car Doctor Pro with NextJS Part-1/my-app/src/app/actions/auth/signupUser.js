"use server"
import bcrypt from "bcrypt"
import dbConnect, { colletionNameObj } from "@/lib/dbConnect";

export const signupUser = async (playload) => {
    console.log(playload);
    const userColletion = dbConnect(colletionNameObj.userColletion);
    const { email, password } = playload;
    if (!email || !password) return { success: false };
    const user = await userColletion.findOne({ email: playload.email });
    if (!user) {
        const hashedPassword = await bcrypt.hash(password,10);
        playload.password= hashedPassword;
        const result = await userColletion.insertOne(playload);
        // console.log("add scuccesfully");
        const {acknowledged, insertedId}= result;
        return { acknowledged,insertedId };

    }
    return { success: false };
}