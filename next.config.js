/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //due to using links for images as demo purpose(hacks of using links as image)
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig
