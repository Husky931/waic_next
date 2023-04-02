/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://61.241.103.109:3332/:path*',
      },
    ];
  },
};