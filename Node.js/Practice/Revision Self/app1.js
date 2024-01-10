var http = require('http')
var f =require('fs')

http.createServer((req,res)=>{
    if(req.method ==='GET')
    {
        res.writeHead(200,{"Content-Type":"text/html"})
        f.createWriteStream("./Registration Form/Registration.html","utf-8").pipe(res)
    }
    else if(req.method==='POST')
    {
        var myrecord=""
        req.on("data",function(record){
            myrecord+=record
        })
        req.on("end",function(){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(myrecord)
            res.end()
        })
    }
}).listen(8700)