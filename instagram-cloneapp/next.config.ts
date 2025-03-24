import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "th.bing.com" },
      { protocol: "https", hostname: "choke-clutch.com" },
      { protocol: "https", hostname: "akcdn.detik.net.id" },
      { protocol: "https", hostname: "th.bing.com" },
    ],
  },
};

export default nextConfig;