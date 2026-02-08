import dbConnect from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import React from "react";

export const dynamic= "force-dynamic"

const Page = async () => {
  // const res = await fetch("http://localhost:3000/api/items", {
  //   cache: "force-cache", // or "no-store"
  // });

  // const {NEXT_PUBLIC_SERVER_ADDRESS} =process.env;
  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  const res = await fetch("https://students-gules-nu.vercel.app/api/items");

  // const result = await dbConnect("students").find({}).toArray();

  

  const result = await res.json();

  // ✅ API returns { data: [...] }
  const students = Array.isArray(result?.data) ? result.data : [];

  // if(students.length>3){
  //   redirect("/")
  // }

  return (
    <ul className="text-center mt-10">
      {students.map((singleStudent) => (
        <li key={singleStudent._id}>
          {/* ✅ Some docs have `name`, some have `productName` */}
          {singleStudent.name || singleStudent.productName || "No Name"}
        </li>
      ))}
    </ul>
  );
};

export default Page;
