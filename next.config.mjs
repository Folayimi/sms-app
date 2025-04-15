/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["use-sync-external-store"],

  webpack(config) {
    config.module.rules.push({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};

export default nextConfig;
