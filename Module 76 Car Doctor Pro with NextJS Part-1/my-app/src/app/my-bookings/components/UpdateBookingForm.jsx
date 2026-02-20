// components/CheckoutForm.jsx

// import { useState } from "react";

"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function UpdateBookingForm({ data }) {
    const router= useRouter();
    const { data: session } = useSession();
    console.log(session)
    console.log("Data", data)
    const handleBookService = async (e) => {
        e.preventDefault();

        const form = e.target;
        const phone = form.phone.value;
        const date = form.date.value;
        const address = form.address.value;
        const bookingPaload = {
            date,
            phone,
            address,
        }
        console.log(bookingPaload);

        const res = await fetch(`https://doctor-car-roan.vercel.app/api/my-bookings/${data._id}`, {
            method: "PATCH",
            body: JSON.stringify(bookingPaload),
        });
        const postedResponse = await res.json();
        router.push("/my-bookings");
        console.log(postedResponse);;

    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">

            <h1 className="text-2xl font-bold mb-6 text-center">Book Service: {data?.title}</h1>
            <form onSubmit={handleBookService} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side */}
                <div className="flex flex-col gap-4">
                    <label className="flex flex-col">
                        Name
                        <input
                            defaultValue={session?.user?.name}
                            readOnly
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
                            defaultValue={session?.user?.email}
                            readOnly
                            type="email"
                            name="email"
                            //   value={formData.email}
                            //   onChange={handleChange}
                            className="border p-2 rounded"
                            required
                        />
                    </label>

                    <label className="flex flex-col">
                        Due Amount
                        <input
                            defaultValue={data?.service_price}
                            readOnly
                            type="number"
                            name="dueAmount"
                            //   value={formData.dueAmount}
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
                            defaultValue={data?.date}

                            type="date"
                            name="date"
                            //   value={formData.date}
                            //   onChange={handleChange}
                            className="border p-2 rounded"
                            required
                        />
                    </label>

                    <label className="flex flex-col">
                        Phone
                        <input
                            defaultValue={data?.phone}
                            type="tel"
                            name="phone"
                            //   value={formData.phone}
                            //   onChange={handleChange}
                            className="border p-2 rounded"
                            required
                        />
                    </label>
                    <label className="flex flex-col">
                        Present Address
                        <textarea
                            defaultValue={data?.address}

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
