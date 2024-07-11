const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todoist')

const db = mongoose.connection

db.on('open' , function(){
    console.log('connected with mongoDB')
})

db.on('error', function(err){
    console.log('not connected' , err)
})