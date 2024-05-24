/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['sttwgktgrnjwwhdltmec.supabase.co'],
  },
};

module.exports = nextConfig;
