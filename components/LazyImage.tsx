import React, { useState } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative">
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" aria-hidden="true" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
};

export default LazyImage;
