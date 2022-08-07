const http = require('http');
function fun(req,res)
{
    res.write("<h1> Hello, This is Basic Node Js Server </h1>");
    res.end();
}
http.createServer(fun).listen(4500);


