const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express()

app.use(express.json());


app.post('/todo', async (req,res)=>   {
    const createPayload  = req.body;        // acquiring the input from the body
    const parsedPayload = createTodo.safeParse(createPayload);      // feature of zod
    if(!parsedPayload.success)  {
        res.status(411).json({
            msg: 'invalid input done'
        })
        return;
    }
    await todo.create({ // await ensures of the db doesnt respond, then user won't see the todo msg 
        //parsedPayload.data is guaranteed to have the correct structure. although we can use createpayload.title directly, but this is safer
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get('/all-todos', async (req, res)=>  {
    const todos = await todo.find();      // because the data won't come sometimes from the db or may take some time
    res.json(todos);

})

app.put('/completed', async (req,res) =>   {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.sucess)   {
        req.status(411).json({
            msg: 'invalid input done'
        })
    }
   await todo.update ({
    // we will updade on the basis of ID
    _id: req.body.id,
   }, {
    completed: true,
   })
   res.json({
    msg: "todo marked completed"
   })
})


