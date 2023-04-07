/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: [
      "images.pexels.com",
      "res.cloudinary.com",
      "animals.png",
      "i.ibb.co",
      "img.freepik.com",
    ],
  },
};
