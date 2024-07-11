const Todo=require('../model/todo.model.js')


async function getTodos(req,res){
    const todo = await Todo.find({user: req.user._id});
    res.render('todo.ejs' , {todos : todo , username : req.user.username})
}

// //method get
async function getSingleTodo(req,res){
    const{id}=req.params
    const todo = await Todo.findOne({_id:id})
    res.render('SingleTodo.ejs' , {todo : todo.todo , 
        status:todo.status , 
        id : todo._id , 
        publicAccess : todo.publicAccess,
        username : req.user.username , 
        createdAt : todo.createdAt , 
        updatedAt : todo.updatedAt
    })
}


//method put
async function updateTodo(req,res){
    const {id}=req.params
    const {task,status } = req.body

    let statusValue = status == 'on' ? true : false ;
    const item = await Todo.updateOne({_id:id},{todo:task,status:statusValue })
    res.redirect('/todo')
}

//method post
async function addTodo(req,res){
    const{task , setPublic}=req.body
    
    let publicAccess = setPublic == 'on' ? true : false ;
    const item=await Todo.create({todo:task , user : req.user._id , publicAccess : publicAccess})
    res.redirect('/todo')
}

async function getPublicTodos(req,res){
    const todos = await Todo.find({publicAccess : true }).populate("user")
    console.log(todos)
    res.render('publicTodos' , {todos : todos , username : req.user.username})
}



//method delete
async function deleteTodo(req,res){
    const {id}=req.params
    const item = await Todo.deleteOne({_id:id})
    res.redirect('/todo')
}

function getSearch(req,res){
    res.render('search.ejs' , {username:req.user.username , query:null , todos:null})
}

async function postSearch(req,res){
    const{query} = req.body
    const todos = await Todo.find({"$and" : [{publicAccess : true} , {"$text" : {"$search" : query}} ]})
    res.render('search.ejs' , {username:req.user.username , todos:todos , query:query })
}


module.exports={ getTodos , getSingleTodo , updateTodo , addTodo , getPublicTodos, deleteTodo , getSearch , postSearch}