/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: { domains: ["localhost", "192.168.1.38", "*"] },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["localhost", "192.168.1.38"],
  },
};

module.exports = nextConfig;
