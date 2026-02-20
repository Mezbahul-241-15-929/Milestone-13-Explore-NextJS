import UpdateBookingForm from "../components/UpdateBookingForm";
import { headers } from "next/headers";

export default async function UpdateBookingPage({ params }) {
    const p = await params;
    console.log("params", p)
    const res = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`,{
        headers: await headers(),
    });
    const data = await res.json();
    return (
        <div>
            {/* {
                JSON.stringify(data)
            } */}
            <UpdateBookingForm data={data} />
        </div>
    );
}


