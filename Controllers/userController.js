const {uuid} =require("uuidv4");
const userScema = require("../Modules/userScema");
const NewUserSchema = require("../Modules/NewUserSchema");
// var md5 = require('md5');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const createUser=async(req,res)=>{
   try{
    const userDataall=new userScema({
        id:uuid(),
        name:req.body.name,
        email:req.body.email,
        age:Number(req.body.age)
    
    })
  const data=  await userDataall.save();
    
    res.status(201).json({userData:data})
   }
   catch(error){
    res.status(500).json({error:true, message:error.message})

   }
        
    }
const getuser=async(req,res)=>{
    // const getData=await userScema.find({$and:[{age:{$eq:req.query.age}},{name:{$eq:req.query.name}}]
    // });
    const getData2=await userScema.find({})
    res.send(getData2)
}


const deleteUser=async(req,res)=>{
    const deleteData=await userScema.deleteOne({_id:req.params.id})
    if(deleteData){
        res.status(202).send(deleteData);
    }
}
const deleteUser2=async(req,res)=>{
    const deleteData = await userScema.findByIdAndDelete({ _id: req.params.id });
    if(deleteData){
        res.status(201).send(deleteData);
    }
}
const createOneUser=async(req,res)=>{
    const findOneuser=await userScema.findOne({_id:req.params.id},{_id:0,name:1})
    res.send(findOneuser)
}
// const createOneUser=async(req,res)=>{
//     const findOneuser=await userScema.findOne({_id:req.params.id}).select({
//         name:1,_id:0
//     })
//     res.send(findOneuser)
// }

const UpdateUser=async(req,res)=>{
    const updateUser=await userScema.findByIdAndUpdate({_id:req.params.id},{$set:{name:req.body.name,age:req.body.age,email:req.body.email}},{new:true})
    if(updateUser){
        res.send(updateUser)
    }
}
// const resister=async(req,res)=>{

//     const {name,email,password}=req.body;
//     const user=new NewUserSchema({
//         id:uuid(),
//         name:name,
//         email:md5(email),
//         password:md5(password)
//     })

//     if(user){
//         await user.save()
//         res.status(201).send({Resister:user})
//     }
    
    
// }


// const login=async(req,res)=>{
//     const {email,password}=req.body;
//     const loginuser=await NewUserSchema.findOne({email:md5(email),password:md5(password)})
//     if(loginuser){
//         res.status(203).send({message: "You are logged in"})
//     }
// }

const resister=async(req,res)=>{
    const {name,email,password}=req.body;

    bcrypt.genSalt(saltRounds,async function(err, salt) {
        bcrypt.hash(password, salt,async function(err, hash) {
            const user=new NewUserSchema({
                id:uuid(),
                name:name,
                email:email,
                password:hash
            })
        
            if(user){
                await user.save()
                res.status(201).send({Resister:user})
            }
            
                    });
    });
    
}


const login=async(req,res)=>{
    const {email,password}=req.body;
    const loginuser=await NewUserSchema.findOne({email:email})
if(loginuser){
    bcrypt.compare(password, loginuser.password , async function(err, result) {
        if(result){
            res.status(203).send({message: "You are logged in"})
        }    });
}
    
   
}
    module.exports={ createUser,getuser,createOneUser,deleteUser,deleteUser2,UpdateUser,resister,login}