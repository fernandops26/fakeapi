// server.js
const rateLimit = require('express-rate-limit');
const jsonServer = require('json-server');
const server = jsonServer.create();
const apiList = require('./util/apiList');
const path = require('path');

const limiter = rateLimit({
  windowMs: 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
});
server.use('/api/', limiter);

const middlewares = jsonServer.defaults();
server.use(middlewares);

const databases = require('./databases');

const router = jsonServer.router(databases);

server.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, './robots.txt'));
});

server.use('/api', router);

server.get('/list', (req, res) => {
  return res.send({ apiList });
});

server.listen(3000, () => {
  console.log('JSON Server is running');
});
