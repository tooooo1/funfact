import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@funfact/ui"],
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
