import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", //generate static files
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
