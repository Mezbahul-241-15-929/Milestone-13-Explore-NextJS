import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <div className='grid grid-cols-12'>
                {/* side nav */}
                <div className='col-span-3'>
                    <ul>
                        <li>User list</li>
                        <li>User list</li>
                        <li>User list</li>
                        <li>User list</li>
                        <li>User list</li>
                    </ul>
                </div>
                {/* Dashboard content */}
                <div className='col-span-9'>{children}</div>
            </div>

        </div>
    );
};

export default layout;