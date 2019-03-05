import React from 'react';

const Info = ({ children, className }) => {
    return (
        <span className={`bg-white-05 width-md temp-info ${className}`}>{children}</span>
    );
}

export default Info;