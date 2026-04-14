/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'sol-luna-supabase.supabase.co', // Dummy supabase host, replace or configure later
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
