const config= require('./Config/Config');
const app=require('./app');
const Port=config.DB.app.port || 9923
require('./Config/db')


app.listen(Port,()=>{
    console.log(`The Server is http://localhost:${Port}`);
})