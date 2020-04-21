// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const apiList = require('./util/apiList');

const middlewares = jsonServer.defaults();
server.use(middlewares);

const databases = require('./databases');

const router = jsonServer.router(databases);

server.use('/api', router);

server.get('/list', (req, res) => {
  return res.send({ apiList });
});

server.listen(3000, () => {
  console.log('JSON Server is running');
});
