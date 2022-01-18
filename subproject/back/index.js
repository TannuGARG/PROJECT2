const express=require("express");
bodyparser = require("body-parser");
const mongoose=require("mongoose");
const cities = require("./model/schema");
const app=express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
mongoose.connect("mongodb://localhost:27017/IndiaState");




const port=process.env.PORT||9003;
const someinfo=require("./data/cities")
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", async(req, res) =>{  
    try{
        // await cities.insertMany(someinfo);
        const allDetails= await cities.find()
        res.send(allDetails) 
        
        // res.render("index23", { allDetails})
        // console.log("data sent successfully")
        
    }catch(err){
        res.send("error")
    }
    

       
  
    })



app.listen(port,()=>{
    console.log(`server running at port ${port}`)

})
