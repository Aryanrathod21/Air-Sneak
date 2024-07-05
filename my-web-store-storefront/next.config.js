const { withStoreConfig } = require('./store-config');
const store = require('./store.config.json'); // Import the store configuration

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
});

console.log("next.config.js", JSON.stringify(nextConfig, null, 2));

module.exports = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    // Add support for loading .mp4 files
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: `${isServer ? '../' : ''}static/files/`,
            name: '[name].[ext]',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
