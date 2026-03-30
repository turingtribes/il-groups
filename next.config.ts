import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["@tailwindcss/oxide"],

 devIndicators: false,
};

export default nextConfig;