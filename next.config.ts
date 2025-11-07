import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.com",
      },
       {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
};

export default withNextVideo(nextConfig);