import React from 'react';

const Footer = () => {
    return (
        <div className="text-center mt-3 p-5">
            © Copyright Orange Labs {new Date().getFullYear()}. Developed by
            <a
                style={{ textDecoration: 'none' }}
                href="https://github.com/bdmostafa"
                target="_blank"
            > Mostafa
            </a>. All rights reserved.
        </div>
    );
};

export default Footer;