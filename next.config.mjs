/** @type {import('next').NextConfig} */

const isProd = process.env.IS_PROD === 'true';

const nextConfig = {
    assetPrefix: isProd ? '/SavvyoWebsite/': '',
    trailingSlash: true,
    output: 'export',
};

export default nextConfig;
