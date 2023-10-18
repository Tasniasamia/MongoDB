const mongoose=require('mongoose');
const userSchema =mongoose.Schema({
    id:{
    type:String,
    required:true,

},
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        minlength:[3,"Must be 3 characterS"],
        validate:{
            validator:function(v){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(v)

            },
            message:(props)=>`This is ${props.value}`

            
        }
    },
    age:{
        type:Number,
        required:true
    },
    createUser:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("UserAll",userSchema )