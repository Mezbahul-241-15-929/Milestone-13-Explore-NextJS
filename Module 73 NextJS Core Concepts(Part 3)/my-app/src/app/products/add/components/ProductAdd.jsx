"use client";
import React from "react";

const ProductAdd = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    // ❌ PROBLEM 1:
    // form.productName.value ❌
    // But input name is "name"

    // ✅ FIX:
    const name = form.name.value;

    const payload = { name };

    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // ❌ PROBLEM 2:
    // res.json() crashes if API returns empty response

    // ✅ FIX:
    const text = await res.text();
    const result = text ? JSON.parse(text) : {};
    console.log(result);

    form.reset();
    alert("Student added");
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name" // ✅ must match form.name
          placeholder="Student name"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductAdd;
