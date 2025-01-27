import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // Add any other properties you need here
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // Add any other properties you need here
      },
    ],
  },
};

export default nextConfig;
