/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-*',
        search: '?q=80&w=900&auto=format&fit=crop',
      },
    ],
  },
};

export default nextConfig;
