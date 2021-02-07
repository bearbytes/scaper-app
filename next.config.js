module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/skills',
        permanent: false,
      },
    ]
  },
}
