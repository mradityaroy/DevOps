const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":'application\json'});
    res.write(JSON.stringify({name:'Aditya Kumar',email:'mradityaroy001@gmail.com'}));
    res.end();
}).listen(5000);