/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [{
            source: '/robots.txt',
            destination: '/api/robots',
        }]
    },
}

module.exports = nextConfig