import React, { useEffect } from 'react';
import '../../App.css';
import { backButtonFunction } from '../../main.js';

function Footer() {
    useEffect(() => {
        backButtonFunction();
    }, []);

    return (
        <footer className="text-center">
            <p className="text-white mb-4">© 2025 DentalCare Plus. All rights reserved.</p>
            <div className="contact-icons flex gap-4 justify-center">
                <a href="https://www.facebook.com" title="facebook">
                    <i className="fa-brands fa-facebook fa-xl text-white"></i>
                </a>
                <a href="https://www.instagram.com" title="instagram">
                    <i className="fa-brands fa-instagram fa-xl text-white"></i>
                </a>
                <a href="https://www.x.com" title="twitter">
                    <i className="fa-brands fa-x-twitter fa-xl text-white"></i>
                </a>
            </div>
            <button className="back-btn border-0 bg-transparent" type="button">
                <i className="fa-solid fa-circle-arrow-up"></i>
            </button>
        </footer>
    );
}

export default Footer;
