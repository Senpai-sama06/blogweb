/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/blogweb',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
