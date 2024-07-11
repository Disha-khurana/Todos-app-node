const express=require('express')
const router=express.Router()


const {getSingleTodo,getPublicTodos,updateTodo,getTodos,addTodo, deleteTodo, getSearch, postSearch }=require("../controller/todo.controller.js")
const { setBookmark } = require('../controller/user.controller.js')

// get all todos
router.get('/',getTodos)
router.get('/all' , getPublicTodos)
router.route('/search').get(getSearch).post(postSearch)
router.get('/:id',getSingleTodo)
router.post('/update/:id',updateTodo)
router.post('/',addTodo)
router.delete('/delete/:id',deleteTodo)



module.exports=router