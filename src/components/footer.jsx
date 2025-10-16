import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center py-8 text-sm text-gray-400">
            <p>© {currentYear} <a href="https://asfakahmed.netlify.app/" target='_blank'
                                  className='hover:text-[#004908]'>Asfak Ahmed</a></p>
        </footer>
    );
};

export default Footer;
