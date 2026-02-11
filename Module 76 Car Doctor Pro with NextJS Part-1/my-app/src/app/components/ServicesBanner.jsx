import Image from "next/image";

const banners = [
    "/assets/images/checkout/checkout.png",
];

export default function LandingPage() {
    return (
        <>
            <section className="container mx-auto px-4 py-10 h-[100px]">
                <div className=" w-full rounded-xl overflow-hidden">
                    <div className="relative w-full h-[450px] lg:h-[50px]">
                        <Image
                            src="/assets/images/checkout/checkout.png"
                            alt="Car Service Banner"
                            fill
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center px-6 lg:px-16">
                            <div className="max-w-xl text-white space-y-6">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    Service Details <br />
                                </h1>

                                <div className="flex gap-4">
                                    <button className="btn btn-primary">
                                        Discover More
                                    </button>
                                    <button className="btn btn-outline btn-white text-white hover:bg-white hover:text-black">
                                        Latest Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>

    );
}
