const express=require('express');
const userScema = require('../Modules/userScema');
const route=express.Router();
const { createUser,getuser, createOneUser} = require('../Controllers/userController');

route.post('/',createUser)
route.get('/',getuser)
route.get('/:id',createOneUser)


module.exports=route