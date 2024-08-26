/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Portfolio", // Matches your GitHub Pages repo name
    assetPrefix: "/Portfolio/",
    trailingSlash: true, // Ensures URLs end with a slash
    output: 'export', // Enables static HTML export
  };
  
  module.exports = nextConfig;
  