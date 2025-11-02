import { NextConfig } from 'next';

export default {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
} satisfies NextConfig;
