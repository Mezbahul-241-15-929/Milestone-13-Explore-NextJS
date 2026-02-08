import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache", // or "no-store"
  });

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
