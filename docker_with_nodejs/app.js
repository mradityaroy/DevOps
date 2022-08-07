const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Hello from Docker!");
});

app.listen(3000,function(){
    console.log("App is listening on port 3000")
});