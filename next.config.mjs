/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/aermilina.github.io' : '',
  assetPrefix: isProd ? '/aermilina.github.io/' : '',
};

export default nextConfig;
