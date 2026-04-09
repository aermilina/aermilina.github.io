/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  
  experimental: {
    optimizeCss: true, 
  },
  compress: true,
  poweredByHeader: false,
  optimizeFonts: true,
  swcMinify: true, 
};

export default nextConfig;