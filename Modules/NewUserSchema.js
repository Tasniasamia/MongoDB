const mongoose=require('mongoose');
var encrypt = require('mongoose-encryption');

const NewUser=mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
// const encKey=process.env.ENC_KEY
// NewUser.plugin(encrypt, { secret: encKey,  encryptedFields: ['password'] });

module.exports=mongoose.model("CollectUsers",NewUser )