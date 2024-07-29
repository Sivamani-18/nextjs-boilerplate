/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/nextjs-boilerplate' : '', // Use an empty string for development
  assetPrefix: isProd
    ? 'https://sivamani-18.github.io/nextjs-boilerplate/'
    : undefined,
  trailingSlash: true,
  publicRuntimeConfig: {
    basePath: isProd ? '/nextjs-boilerplate' : '',
  },
};

export default nextConfig;
