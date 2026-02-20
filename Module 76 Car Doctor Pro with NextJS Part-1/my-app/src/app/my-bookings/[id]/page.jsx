import dbConnect from "@/lib/dbConnect";
import UpdateBookingForm from "../components/UpdateBookingForm";

export default async function UpdateBookingPage({ params }) {
    const p = await params;
    console.log("params",p)
    const res = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`);
    const data = await res.json();
    return (
        <div>
            {
                JSON.stringify(data)
            }
            <UpdateBookingForm data={data} />
        </div>
    );
}


export const PATCH = async (req, { params }) => {
  const p = await params;
  const bookingCollection = dbConnect("booking"); // Note: path truncated in image
  const query = { _id: new ObjectId(p.id) };

  const body = await req.json();

  const filter = {
    $set: { ...body }
  };

  const option = {
    upsert: true
  };

  const updateResponse = await bookingCollection.updateOne(query, filter, option);
  revalidatePath("/my-bookings");
  
  return NextResponse.json(updateResponse);
}
