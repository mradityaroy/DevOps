const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get("/main",(req,res)=>{
    res.send("Hello Aditya!!");
});

app.post("/main/post",(req,res)=>{
    res.send("This is post method call");
});

app.listen("8080",()=>{
    console.log("server is running on port 8080")
});