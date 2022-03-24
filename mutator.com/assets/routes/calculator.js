const KoaRouter = require('koa-router')

const router = new KoaRouter()


router.get('/add/:num1/:num2', async (ctx) => {
    
    ctx.body = {
        'answer': ctx.params.num1 + ctx.params.num2
    }
})


router.post('/substract', async (ctx) => {
    const {num1, num2}  = ctx.request.body;
    ctx.body = {
        'answer': num1 - num2
    }
})

router.post('/multiply', async (ctx) => {
    const {num1, num2}  = ctx.request.body;
    ctx.body = {
        'answer': num1 * num2
    }
})

router.post('/divide', async (ctx) => {
    const {num1, num2}  = ctx.request.body;
    ctx.body = {
        'answer': num1 / num2
    }
})


module.exports = router;