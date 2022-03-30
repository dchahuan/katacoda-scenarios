let todos = require('../db')
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
    let todo = todos.filter(t => t.id == ctx.params.id)
    if (todo.length === 0){
        ctx.status = 404
        ctx.body = {
            'message':"error"
        }
        return
    }

    todo.text = text
    ctx.body = todos
})

router.delete('/todos/:id', async (ctx) => {
    let todo = todos.filter(t => t.id == ctx.params.id)
    if (todo.length === 0){
        ctx.status = 404
        ctx.body = {
            'message':"error"
        }
        return
    }
    todos = todos.filter(t => t.id !== ctx.params.id)
    ctx.body = todos
})


module.exports = router;