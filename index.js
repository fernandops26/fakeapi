const koa = require('koa');
const route = require('koa-router');
const c2k = require('koa-connect');
const serve = require('koa-static');

// server.js
const jsonServer = require('json-server');
const server = jsonServer.create(); // express server

const middlewares = jsonServer.defaults();
server.use(middlewares);

const listOfRoutes = ['databases/dog.json'];

listOfRoutes.forEach((item) => {
  const router = jsonServer.router(item);

  server.use('/api', router);
});

const app = new koa();
app.use(serve(__dirname + '/public'));
app.use(c2k(server));

const routes = new route({ prefix: '/' });

routes.get('/', async (ctx) => {
  console.log('here');
  return (ctx.body = 'here');
});

app.use(routes.routes());

app.listen(3000, () => {
  console.log('JSON Server is running on port: ', 3000);
});
