const KoaRouter = require('koa-router')

const router = new KoaRouter()

function add(num1, num2) {
    return num1 + num2;
}

router.get('/add/:num1/:num2', async (ctx) => {
    ans = add(parseInt(ctx.params.num1), parseInt(ctx.params.num2))
    ctx.body = {
        'answer': ans
    }
})

function subtract(num1, num2) {
    return num1 - num2;
}

router.post('/subtract', async (ctx) => {
    const {num1, num2}  = ctx.request.body;
    ans = subtract(num1, num2);
    ctx.body = {
        'answer': ans
    }
})

function multiply(num1, num2) {
    return num1 * num2;
}

router.post('/multiply', async (ctx) => {
    const {num1, num2}  = ctx.request.body;
    ans = multiply(num1, num2);
    ctx.body = {
        'answer': ans
    }
})

function divide(num1, num2) {
    return num1 / num2;
}

router.post('/divide', async (ctx) => {
    const {num1, num2}  = ctx.request.body;
    ans = divide(num1, num2);
    ctx.body = {
        'answer': ans
    }
})

module.exports = router;