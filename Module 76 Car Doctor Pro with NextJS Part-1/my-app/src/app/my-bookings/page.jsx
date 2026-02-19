"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MyAllBookingsTable from "../components/MyAllBookingsTable";

export default function MyBookingsPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchMyBookings = async () => {
            const res = await fetch("http://localhost:3000/api/service");
            const d = await res.json();
            setData(d);
        };
        fetchMyBookings()
    }, []);
    return (
        <div>
            
            <MyAllBookingsTable data={data} />
        </div>
    );
}
