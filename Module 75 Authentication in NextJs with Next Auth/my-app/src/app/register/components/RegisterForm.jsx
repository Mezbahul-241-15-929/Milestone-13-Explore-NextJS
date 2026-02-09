import { registerUser } from "@/app/action/auth/registerUser";
import React from "react";

const RegisterForm = () => {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    const playload = { username, password };
    console.log(playload);
    const result= await registerUser(playload);
    console.log(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Register
        </h2>

        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          className="w-full border px-3 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-full border px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
