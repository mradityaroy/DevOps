// const express = require("express");
const exp = require("express");
const app= exp();

const mong = require("mongoose");

mong.connect("mongodb://localhost:27017",{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err) console.log("connected");
    else console.log("db error");
});
app.listen(5000,()=>{
    console.log("connected on port 5k")
})