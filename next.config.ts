import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ohne das sucht Turbopack ausserhalb des Repos nach einem Lockfile.
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
