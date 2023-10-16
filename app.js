const express=require('express');
const app=express();
const userRoute=require('./Routes/user.route')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/route/user",userRoute)
app.get('/',(req,res)=>{
    res.send("Yes Success Home page")
})
//no found any route
app.use((req,res,next)=>{
    res.status(404).json({
        error:true,message:"404 Not found page"
    })
})
//server error
app.use((err,req,res,next)=>{
    res.status(500).json({error:true,message:"Something is broken"})
})
module.exports=app
