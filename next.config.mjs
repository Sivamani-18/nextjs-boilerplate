/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set the basePath to your repository name if it's not the root domain
  basePath: '/nextjs-boilerplate', // Replace 'your-repo-name' with the actual name of your GitHub repository

  // Set the assetPrefix to serve assets correctly
  assetPrefix: '/nextjs-boilerplate/', // Ensure this matches your basePath

  // Enable trailing slash to ensure paths work correctly
  trailingSlash: true,

  // Optional: other Next.js configurations can go here
};

export default nextConfig;
