module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'res.cloudinary.com', 'localhost:3000']
  },
  env: {
    BASE_URL: process.env.BASE_URL
  },
  rewrites: async () => {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/home'
      }
    ]
  }
}
