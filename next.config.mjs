/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'occ-0-4995-2164.1.nflxso.net',
            },
            {
                protocol: 'https',
                hostname: 'occ-0-4995-2186.1.nflxso.net',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol:'https',
                hostname:'assets.nflxext.com'
            },
            {
                protocol:'https',
                hostname:'occ-0-6245-2186.1.nflxso.net'
            }
        ]
    }
};

export default nextConfig;