import React from 'react';
import styles from "./Card.module.css";


const page = () => {
    return (
        <div>
            <h1 className='test-styling'>This line is for global css</h1>
      <h2 className={`border border-2 ${styles["test-styling2"]}`}>Card Component</h2>
        </div> 
    );
};

export default page;