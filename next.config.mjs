/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default {
  ...nextConfig,
  ...withVideos(),
};
