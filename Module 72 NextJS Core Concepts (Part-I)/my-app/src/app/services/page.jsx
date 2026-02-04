import Link from "next/link";

const data = [
  { _id: "1", service_name: "Web Development" },
  { _id: "2", service_name: "Graphic Design" },
];

export default function Page() {
  return (
    <div>
      <h1>Services List</h1>
      {data.map(d => (
        <div key={d._id}>
          <Link href={`/services/${d._id}`}>
            <h2>{d.service_name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
