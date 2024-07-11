const mongoose = require('mongoose')

// new mongoose.schema(schema design , { timestamps : true / false  })
const userSchema = new mongoose.Schema({
    username : {
        unique : true ,
        required : true ,
        type : String
    },
    email  :  {
        unique : true ,
        required : true ,
        type : String
    } ,
    password :  {
        required : true ,
        type : String
    },
    bookmark:{
        type: mongoose.Schema.Types.ObjectId ,
        ref : "todos"
    }
} , {
    timestamps : true 
})

let User = mongoose.model('users' , userSchema )

module.exports = User 