const withPlugins = require('next-compose-plugins');

const nextConfig = {
  poweredByHeader: false,
  webpack: (config) => {
    config.devtool = 'source-map';
    config.node.global = false;

    return config;
  },
  images: {
    domains: ['via.placeholder.com', 'randomuser.me'],
  },
};

module.exports = withPlugins([], nextConfig);
