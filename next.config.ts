import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
  async rewrites() {
    return [
      {
        source: "/Resume.pdf",
        destination: "/resume.pdf",
      },
      {
        source: "/resume2030",
        destination: "/resume2030.pdf",
      },
    ];
  },
};

export default nextConfig;
