const mongoose=require('mongoose');
const userSchema =mongoose.Schema({
    id:{
    type:String,
    required:true
},
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    createUser:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("UserAll",userSchema )