import React from 'react';


const getsinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data = await res.json();
    return data;
};

const page = async ({ params }) => {
    const p = await params;
    const singlePost = await getsinglePost(p.id);
    return (
        <div>
            <p >{singlePost.id}</p>
            <p className='text-2xl font-bold'>{singlePost.title}</p>
            <p>{singlePost.body}</p>
        </div>
    );
};

export default page;