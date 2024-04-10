/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gogocdn.net',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 's4.anilist.co',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'anicdnstream.info',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
