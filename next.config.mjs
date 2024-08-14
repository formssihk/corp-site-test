/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DIRECTUS_URL: "http://localhost:8080/api",
    DIRECTUS_PUBLIC_ACCESS_TOKEN: "HuCcNoYJXYThNzY-opv_702Ax5hGGxim"
  }
};

export default nextConfig;
