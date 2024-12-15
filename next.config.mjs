import { withPayload } from "@payloadcms/next/withPayload";
import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPayload(withNextVideo(nextConfig));