// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();

const middlewares = jsonServer.defaults();
server.use(middlewares);

const listOfRoutes = ['databases/dog.json'];

listOfRoutes.forEach((item) => {
  const router = jsonServer.router(item);

  server.use('/api/', router);
});

server.listen(3000, () => {
  console.log('JSON Server is running');
});
