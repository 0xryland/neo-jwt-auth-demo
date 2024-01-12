/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


// next.config.js
const path = require('path');

module.exports = {
  // Add other Next.js configuration options as needed
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Custom webpack configuration, if needed
    return config;
  },

};
