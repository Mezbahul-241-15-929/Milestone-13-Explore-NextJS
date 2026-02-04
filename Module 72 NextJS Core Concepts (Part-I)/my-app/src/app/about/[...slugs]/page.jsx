import React from 'react';

export default async function AboutSlugpages({params}) {

    const p= await params;
    console.log(p)
    return (
        <div>
            About slugPages
        </div>
    );
};
