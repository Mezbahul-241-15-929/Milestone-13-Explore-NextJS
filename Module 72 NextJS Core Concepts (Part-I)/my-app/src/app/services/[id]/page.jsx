import React from 'react';


export default function page({params}) {
    const id= params.id;
    const data = [
        {
            _id: "1",
            service_name: "Web Development",
            image: "https://via.placeholder.com/400x250?text=Web+Development",
            description: "Professional website development using modern technologies like React, Next.js, and Node.js."
        },
        {
            _id: "2",
            service_name: "Graphic Design",
            image: "https://via.placeholder.com/400x250?text=Graphic+Design",
            description: "Creative graphic design services including logos, banners, social media posts, and branding."
        },
        {
            _id: "3",
            service_name: "Digital Marketing",
            image: "https://via.placeholder.com/400x250?text=Digital+Marketing",
            description: "Result-driven digital marketing solutions including SEO, social media marketing, and ads."
        },
        {
            _id: "4",
            service_name: "App Development",
            image: "https://via.placeholder.com/400x250?text=App+Development",
            description: "Android and iOS app development with smooth performance and modern UI/UX."
        },
        {
            _id: "5",
            service_name: "UI/UX Design",
            image: "https://via.placeholder.com/400x250?text=UI%2FUX+Design",
            description: "User-focused UI/UX design to create visually appealing and easy-to-use interfaces."
        }
    ];

    const singleData = data.find(d => d._id === id);

    if (!singleData) {
        return <h2>Service not found</h2>;
    }

    return (
        <div>
            <h1>Service Details Page</h1>
            <p>ID: {singleData._id}</p>
            <p>Name: {singleData.service_name}</p>
            {/* <img src={singleData.image} alt={singleData.service_name} /> */}
            <p>Description: {singleData.description}</p>
        </div>
    );
}
