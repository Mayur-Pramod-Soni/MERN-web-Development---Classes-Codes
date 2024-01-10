var myhttp = require('http')
var f = require('fs')

myhttp.createServer((req,res)=>{
    if(req.method ==='GET')
    {
        res.writeHead(200,{"Content-Type":"text/html"})
        f.createReadStream("./theme/loginPage.html","utf-8").pipe(res)
    }
    else if(req.method==='POST')
    {
        // console.log("This is Post Method")
        var myrecord=""            // global variable
        req.on("data",function(record){     // parameter     
              myrecord+=record           // assign value in global variable
        })
        req.on("end",function(){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(myrecord)
            res.end()
        })
    }
}).listen(8900)