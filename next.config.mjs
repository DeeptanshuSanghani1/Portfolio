/** @type {import('next').NextConfig} */
const nextConfig = {
  // The homepage is the scroll story in public/home.html (plain HTML + Three.js, no React).
  // Every other route (/about, /contact, /api/send) still runs through Next.js as before.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/home.html" }],
    };
  },
};

export default nextConfig;
