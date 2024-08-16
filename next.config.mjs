const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "build",
  reactStrictMode: true,
  env: {
    DIRECTUS_URL: "http://corporate-web.io/api",
    DIRECTUS_PUBLIC_ACCESS_TOKEN: "HuCcNoYJXYThNzY-opv_702Ax5hGGxim"
  }
};

export default nextConfig;