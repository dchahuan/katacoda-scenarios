const supertest = require('supertest');
const app = require('../app')

const request = supertest(app.callback())

describe('TODOS API', () =>  {
    let newTodo = {
        'text':"Hello I am test todo"
    }

    describe('GET EVERY TODO', () => {
        let response;
        beforeAll(async () => {
            response = await request.get('/todos')
        });
        test('responds 200 code', () => {
            expect(response.status).toBe(200);
        });

        test('responds with a json body type', () => {
            expect(response.type).toEqual('application/json');
        });
    
    })

    describe('POST A NEW TODO', () => {
        let response;
        beforeAll(async () => {
            response = await request.post('/todos').set('Content-type', 'application/json')
            .send(newTodo);
        })
        test('responds 200 code', () => {
            expect(response.status).toBe(200);
        });

        test('responds with a json body type', () => {
            expect(response.type).toEqual('application/json');
        });
    
    })

    describe('Patch A NEW TODO', () => {

        describe('With valid id', () => {
            let response;
            beforeAll(async () => {
                response = await request.patch('/todos/1').set('Content-type', 'application/json')
                .send(newTodo);
            })
            test('responds 200 code', () => {
                expect(response.status).toBe(200);
            });
    
            test('responds with a json body type', () => {
                expect(response.type).toEqual('application/json');
            });
        })

        describe('With invalid id', () => {
            let response;
            beforeAll(async () => {
                response = await request.patch('/todos/100').set('Content-type', 'application/json')
                .send(newTodo);
            })
            test('responds 404 code', () => {
                expect(response.status).toBe(404);
            });
    
            test('responds with a json body type', () => {
                expect(response.type).toEqual('application/json');
            });
        })

    
    })

    describe('DELETE A NEW TODO', () => {

        describe('With valid id', () => {
            let response;
            beforeAll(async () => {
                response = await request.delete('/todos/1').set('Content-type', 'application/json')
                .send(newTodo);
            })
            test('responds 200 code', () => {
                expect(response.status).toBe(200);
            });
    
            test('responds with a json body type', () => {
                expect(response.type).toEqual('application/json');
            });
        })

        describe('With invalid id', () => {
            let response;
            beforeAll(async () => {
                response = await request.delete('/todos/100').set('Content-type', 'application/json')
                .send(newTodo);
            })
            test('responds 404 code', () => {
                expect(response.status).toBe(404);
            });

            test('body should have message', () => {
                let ans = response.body.message === 'error'
                expect(ans).toBe(true);
            });
    
            test('responds with a json body type', () => {
                expect(response.type).toEqual('application/json');
            });
        })

    
    })
})