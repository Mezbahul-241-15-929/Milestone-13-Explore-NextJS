// components/CheckoutForm.jsx

// import { useState } from "react";


export default function CheckoutForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     dueAmount: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Order Confirmed!\n" + JSON.stringify(formData, null, 2));
//   };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Book Service</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            Name
            <input
              type="text"
              name="name"
            //   value={formData.name}
            //   onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label className="flex flex-col">
            Email
            <input
              type="email"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label className="flex flex-col">
            Phone
            <input
              type="tel"
              name="phone"
            //   value={formData.phone}
            //   onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            Date
            <input
              type="date"
              name="date"
            //   value={formData.date}
            //   onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label className="flex flex-col">
            Due Amount
            <input
              type="number"
              name="dueAmount"
            //   value={formData.dueAmount}
            //   onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </label>
          <label className="flex flex-col">
            Present Address
            <textarea
              name="address"
            //   value={formData.address}
            //   onChange={handleChange}
              className="border p-2 rounded"
              rows={3}
              required
            />
          </label>
        </div>

        {/* Full Width Button */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
