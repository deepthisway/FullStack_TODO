const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()

app.use(express.json());

app.get('/all-todos', (req, res)=>  {
    const createPayload  = req.body;        // acquiring the input from the body
    const parsedPayload = createTodo.safeParse(createPayload);      // feature of zod
    if(!parsedPayload.success)  {
        res.status(411).json({
            msg: 'invalid input done'
        })
    }
})


app.post('/todo', (req,res)=>   {

})

app.put('/completed', (req,res) =>   {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.sucess)   {
        req.status(411).json({
            msg: 'invalid input done'
        })
    }
})

