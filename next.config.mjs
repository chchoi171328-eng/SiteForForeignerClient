/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allow accessing the dev server from LAN IPs (Next.js 16 blocks cross-origin
    // dev resources by default, which breaks HMR/hydration when opened via a network URL).
    allowedDevOrigins: ['172.30.1.33', '172.30.1.36'],
    async redirects() {
        return [
            {
                // The attorney's name is romanised "Chulho"; the old spelling was
                // already indexed, so keep it reachable.
                source: '/attorneys/cheolho-choi',
                destination: '/attorneys/chulho-choi',
                permanent: true,
            },
        ]
    },
    images: {
        // All site imagery is now self-hosted under /public/assets.
        remotePatterns: [
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
