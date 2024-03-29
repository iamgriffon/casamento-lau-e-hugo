/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_HOST: './sqlite.db'
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn0.casamentos.com.br",
        
      }
    ]
  }
};

export default nextConfig;
