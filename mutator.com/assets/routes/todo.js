const todos = require('../db')
const KoaRouter = require('koa-router')

const router = new KoaRouter()


router.get('/todos', async (ctx) => {
    
    ctx.body = todos
})


router.post('/todos', async (ctx) => {
    const {text}  = ctx.request.body;
    const id = todos[todos.length - 1].id + 1
    todos.push({
        id, text
    })
    ctx.body = todos
})

router.patch('/todos/:id', async (ctx) => {
    const { text } = ctx.request.body;
    const todo = todos.filter(t => t.id == ctx.params.id)
    todo.text = text
    ctx.body = todos
})

router.delete('/todos/:id', async (ctx) => {
    todos = todos.filter(t => t.id !== ctx.params.id)
    ctx.body = todos
})


module.exports = router;