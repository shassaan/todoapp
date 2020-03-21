import React from 'react';
const Footer = (prop) => {
    return (
        <h3 className="p-5 jumbotron text-center">
            {prop.children}  
        </h3>
    )
}

export default Footer;