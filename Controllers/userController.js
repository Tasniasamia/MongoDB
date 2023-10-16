const {uuid} =require("uuidv4");
const userScema = require("../Modules/userScema");

const createUser=async(req,res)=>{
   try{
    const userDataall=new userScema({
        id:uuid(),
        name:req.body.name,
        email:req.body.email
    
    })
  const data=  await userDataall.save();
    
    res.status(201).json({userData:data})
   }
   catch(error){
    res.status(500).json({error:true, message:error.message})

   }
        
    }
const getuser=async(req,res)=>{
    const getData=await userScema.find();
    res.send(getData)
    // res.send("Myself user of userRoute")
}

// const createOneUser=async(req,res)=>{
//     const findOneuser=await userScema.findOne({_id:req.params.id}).select({
//         name:1,_id:0
//     })
//     res.send(findOneuser)
// }

const createOneUser=async(req,res)=>{
    const findOneuser=await userScema.findOne({_id:req.params.id},{_id:0,name:1})
    res.send(findOneuser)
}
    module.exports={ createUser,getuser,createOneUser}