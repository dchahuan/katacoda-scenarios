const Koa = require('koa')

const app = new Koa()

const calcRouter = require('./routes/calculator')
const todoRouter = require('./routes/todo.js')

app.use(calcRouter.routes())
app.use(todoRouter.routes())

app.listen(3000)