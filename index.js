const express = require('express')
const app = express()
const db = require("./config/dbconfig.js")
const cookieParser = require('cookie-parser')
app.use(cookieParser())

const auth = require('./middlewares/auth.js')
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine' , 'ejs')
app.use('/todo' , auth , require('./routes/todo.routes.js'))
app.use('/user' , require('./routes/user.routes.js'))

let staticPath = path.join( __dirname , "public" )
app.use(express.static(staticPath))

app.get('/' , (req , res)=>{
    res.render('home.ejs')
})

app.get('/logout' , (req , res)=>{
    res.cookie("token" , "")    
    res.redirect('/user/login')
})


app.listen(2000 , ()=>{
    console.log("server started on 2000")
})