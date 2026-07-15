/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allow accessing the dev server from LAN IPs (Next.js 16 blocks cross-origin
    // dev resources by default, which breaks HMR/hydration when opened via a network URL).
    allowedDevOrigins: ['172.30.1.33'],
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
