/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  trailingSlash: true, // ensures that the URLs end with a slash
  output: "export", // This enables static HTML export with the App Router
};

module.exports = nextConfig;
