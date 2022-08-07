var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const route = require("./routes/route");

// connect to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/contactlists");

//on connection 
mongoose.connection.on("connected",()=>{
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on("error",(err)=>{
    if(err){
        console.log("Error in Database connection:"+err);
    }
})

// port no.
const port = 3000;


//---------middleware -----
// cors
app.use(cors());

//body-parse
app.use(bodyparser.json());

//---------static files------
app.use(express.static(path.join(__dirname,"public")));

app.use("/api",route)

//testing server
app.get("/",(req,res)=>{
    res.send("Hello from Server");
});

app.listen(port,()=>{
    console.log("server strted at port:"+port);
});