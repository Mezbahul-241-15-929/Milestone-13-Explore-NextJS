import Image from 'next/image';
import React from 'react';

const MyAllBookingsTable = ({ data }) => {
    return (
        <div className="overflow-x-auto container mx-auto mt-5">
            <table className="table w-full">
                
                {/* Table Header */}
                <thead className="bg-gray-200">
                    <tr>
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Date</th>
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
                            <td>${item.service_price}</td>
                            <td>
                                <button className="btn btn-sm btn-primary">
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-error">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default MyAllBookingsTable;
