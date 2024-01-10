var myhttp = require('http')
var f  = require('fs')


myhttp.createServer((myrequest,myresponse)=>{
    if(myrequest.method=== 'GET')
    {
        myresponse.writeHead(200,{"Content-Type":"Text/html"})
        f.createReadStream('./userForm.html',"utf-8").pipe
        (myresponse)
    }
    else if(myrequest.method==='POST')
    {
        
    }
}).listen(8900)



// var myhttp=require('http')                  //  (step 1)

// // http is a predefined module for browser type of task .
// port=8090                                                         // create a port number
// myhttp.createServer((req,res)=>{  
//     var d=new Date()                                // create a server  
//     res.write(" "+d+" ");                           // For show on console  
//     res.end()                                                     // fror end server port number                      
// }).listen(port)                                                   // for spcify port number is use for run application 
// console.log("http://localhost:8090")                              // for show on console