const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = parseInt(process.env.PORT, 10) || 3000

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(
      '/api/v1',
      createProxyMiddleware({
        target: 'https://www.aesop.com/au',
        changeOrigin: true,
      })
    )

    server.all('*', (req, res) => handle(req, res))
    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port}`)
    })
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
