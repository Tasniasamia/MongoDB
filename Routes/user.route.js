const express=require('express');
const userScema = require('../Modules/userScema');
const route=express.Router();
const { createUser,getuser, createOneUser, deleteUser, deleteUser2,UpdateUser,resister, login} = require('../Controllers/userController');

route.post('/',createUser)
route.get('/',getuser)
route.get('/:id',createOneUser)
route.delete('/:id',deleteUser)
route.delete("/users/:id",deleteUser2)
route.put("/:id",UpdateUser)
route.post("/resister",resister)
route.post('/login',login)

module.exports=route