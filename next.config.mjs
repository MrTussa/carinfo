import { withPayload } from "@payloadcms/next/withPayload";
import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/carinfo",
        permanent: true,
      },
    ];
  },
};

export default withPayload(withNextVideo(nextConfig));
