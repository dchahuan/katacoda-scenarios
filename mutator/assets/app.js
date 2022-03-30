const Koa = require('koa')
const koaBody = require('koa-body');

const app = new Koa()

const calcRouter = require('./routes/calculator')
const todoRouter = require('./routes/todo.js')

app.use(koaBody({
    multipart: true,
    keepExtensions: true,
}));
  

app.use(calcRouter.routes())
app.use(todoRouter.routes())

module.exports = app