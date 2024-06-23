/*
3 steps:
    1. Connect to mongoDB compass and rename collection after /
    2. create Schemas 
    3. create models
schema will be like this:

Todo    {
    title: string,
    description: string,
    completed: boolean
}
*/

const mongoose  = require('mongoose')

// connect to mongoDb database 
mongoose.connect('mongodb+srv://deepthisway:Deep%403574@cluster0.dp3sd3u.mongodb.net/TODO_App')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})



// model
const todo = mongoose.model('todos', todoSchema)

module.exports =  {
    todo
}
