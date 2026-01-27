import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', toggleVisibility);
        toggleVisibility(); // Check initial state

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-6 z-40 bg-navy-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-navy-800 hover:scale-110 hidden lg:block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Back to top"
        >
            <Icons.ArrowUp className="w-6 h-6" />
        </button>
    );
};

export default BackToTop;
