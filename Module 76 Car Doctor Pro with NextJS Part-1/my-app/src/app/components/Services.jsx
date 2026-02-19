import dbConnect, { colletionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

// async function getServices() {
//     const res = await fetch("http://localhost:3000/services.json", {
//         cache: "no-store",
//     });
//     return res.json();
// }
 
const Services = async () => {
    // const services = await getServices();
    const serviceColletion= dbConnect(colletionNameObj.servicescoll);
    const services=await serviceColletion.find({}).toArray();

    

    return (
        <section className="container mx-auto px-4 py-16">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 border-4  border-red-600 rounded-4xl border-dotted text-2xl">
                <p className="text-primary font-semibold">Service</p>
                <h2 className="text-xl md:text-4xl font-bold mt-2  ">
                    Our Service Area
                </h2>
                <p className="text-gray-500 mt-4 text-sm">
                    The majority have suffered alteration in some form, by injected humour,
                    or randomised words which don’t look even slightly believable.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service._id}
                        className="card bg-base-100 shadow-md border"
                    >
                        <figure className="px-5 pt-5">
                            <img
                                src={service.img}
                                alt={service.title}
                                width={400}
                                height={250}
                                className="rounded-xl object-cover h-[200px] w-full"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>

                            <div className="flex items-center justify-between mt-4">
                                <p className="text-primary font-semibold">
                                    Price : ${service.price}
                                </p>

                                <Link
                                    href={`/services/${service._id}`}
                                    className="text-primary text-xl font-bold"
                                >
                                    →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="text-center mt-12">
                <Link href="/services" className="btn btn-outline btn-primary">
                    More Services
                </Link>
            </div>

        </section>
    );
};

export default Services;
