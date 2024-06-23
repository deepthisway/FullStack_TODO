// this will contain the use of zod library, 
// all the types that what is expected when inputting something, will be defined here.
const z = require('zod')

const createTodo = z.object({
    title: z.string(),
    description: z.string()
})

const updateTodo = z.object({
    id: zod.string(),
})
 

module.exports = {
    createTodo,
    updateTodo
}
