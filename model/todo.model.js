const mongoose=require('mongoose')
//new mongoose.Schema(schemaDesign,{timestamps:true/false})
const todoSchema= new mongoose.Schema({
    todo:{
        required:true,
        type:String
    },
    status:{
        default:false,
        type:Boolean
    },
    publicAccess:{
        type:Boolean ,
        default :false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId ,
        ref : "users"
    }
},{
    timestamps:true
})

let Todo=mongoose.model('todos',todoSchema)   //collection,schema

module.exports=Todo