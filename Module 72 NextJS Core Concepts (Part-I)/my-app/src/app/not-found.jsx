import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
    return (
        <div>
            <h1>404 Not found</h1>
            <Link href="/">Go back to home</Link>
        </div>
    );
};

export default NotFoundPage404;