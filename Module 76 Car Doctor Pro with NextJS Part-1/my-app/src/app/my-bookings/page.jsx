"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MyBookingsPage() {
    const [data, setData] = useState([]);

    // Fetch all bookings
    useEffect(() => {
        const fetchMyBookings = async () => {
            try {
                const res = await fetch("/api/service");
                const d = await res.json();
                setData(d);
            } catch (error) {
                console.error("Fetch Error:", error);
            }
        };

        fetchMyBookings();
    }, []);

    // Delete handler
    const handleDelete = async (id) => {
        const confirmDelete = confirm("Are you sure?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`/api/service/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                // ✅ Instantly remove from frontend
                setData((prevData) =>
                    prevData.filter((item) => item._id !== id)
                );
            }
        } catch (error) {
            console.error("Delete Error:", error);
        }
    };

    return (
        <div>
            <div className="overflow-x-auto container mx-auto mt-5">
                <table className="table w-full">
                    {/* Table Header */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {data?.map((item) => (
                            <tr key={item._id} className="border">
                                <td>
                                    <Image
                                        src={item.service_img}
                                        alt={item.service_name}
                                        width={50}
                                        height={50}
                                        className="rounded"
                                    />
                                </td>
                                <td>{item.service_name}</td>
                                <td>{item.date}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>${item.service_price}</td>
                                <td>
                                    <Link href={`https://doctor-car-roan.vercel.app/my-bookings/${item._id}`}><button className="btn btn-sm btn-primary">
                                        Edit
                                    </button></Link>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-error"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}