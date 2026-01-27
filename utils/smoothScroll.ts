import React from 'react';

export const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobileMenu?: () => void
) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
        const headerOffset = 100; // Adjust for fixed header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition < 0 ? 0 : offsetPosition,
            behavior: "smooth"
        });
    }
    if (closeMobileMenu) closeMobileMenu();
};
