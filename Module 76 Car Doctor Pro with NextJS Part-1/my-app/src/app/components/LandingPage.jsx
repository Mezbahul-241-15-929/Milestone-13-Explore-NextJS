import Image from "next/image";

const banners = [
  "/assets/images/banner/1.jpg",
  "/assets/images/banner/2.jpg",
  "/assets/images/banner/3.jpg",
  "/assets/images/banner/4.jpg",
  "/assets/images/banner/5.jpg",
  "/assets/images/banner/6.jpg",
];

export default function LandingPage() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="carousel w-full rounded-xl overflow-hidden">

        {banners.map((img, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            {/* Image */}
            <div className="relative w-full h-[450px] lg:h-[550px]">
              <Image
                src={img}
                alt="Car Service Banner"
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-6 lg:px-16">
                <div className="max-w-xl text-white space-y-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                  </h1>

                  <p className="text-sm md:text-base text-gray-200">
                    There are many variations of passages of available,
                    but the majority have suffered alteration in some form.
                  </p>

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

            {/* Navigation Buttons */}
            <div className="absolute left-4 right-4 bottom-6 flex justify-between">
              <a
                href={`#slide${index === 0 ? banners.length : index}`}
                className="btn btn-circle btn-outline text-white"
              >
                ❮
              </a>
              <a
                href={`#slide${index === banners.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle btn-primary"
              >
                ❯
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
