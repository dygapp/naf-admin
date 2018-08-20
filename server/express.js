const { Nuxt, Builder } = require('nuxt-edge')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()
let config = require('../nuxt.config.js')

// Body parser, to access `req.body`
app.use(bodyParser.json())

// Sessions to create `req.session`
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1200000 }
}))

// POST `/api/login` to log in the user and add him to the `req.session.authUser`
app.post('/api/login', function (req, res) {
  if (req.body.username === 'admin' && req.body.password === '111111') {
    req.session.authUser = { username: 'admin', fullname: '系统管理员' }
    return res.json({ errcode: 0, message: 'ok', username: 'admin' })
  }
  res.json({ errcode: -1, message: 'Bad credentials' })
})

// POST `/api/logout` to log out the user and remove it from the `req.session`
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ errcode: 0, message: 'ok' })
})

app.get('/api/userinfo', function (req, res) {
  if (req.session && req.session.authUser) {
    return res.json({ errcode: 0, message: 'ok', userinfo: req.session.authUser })
  }
  res.json({ errcode: -1, message: 'Not login' })
})

// We instantiate Nuxt.js with the options
config.isProd = process.env.NODE_ENV === 'production';
config.dev = !config.isProd;
const nuxt = new Nuxt(config)
// No build in production
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)
app.listen(3000)
console.log('Server is listening on http://localhost:3000')