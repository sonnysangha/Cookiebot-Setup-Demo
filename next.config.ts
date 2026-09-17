import type { NextConfig } from "next";

const suffix = process.env.BASE44_PUBLIC_HOST_SUFFIX;

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: suffix ? [`3000-${suffix}`] : [],
};
export default config;
