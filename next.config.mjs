// /** @type {import('next').NextConfig} */
// const nextConfig = {

//    images: {
//     remotePatterns: [new URL('https://upload.wikimedia.org/**','https://fakestoreapi.com/**')],
//   },
  
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.escuelajs.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;