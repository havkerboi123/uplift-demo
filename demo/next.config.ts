// demo/next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Don’t fail production builds because of ESLint errors/warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ (Optional) Don’t fail builds on TS errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
