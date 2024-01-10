var myhttp=require('http')  // Step 1 

// http is a predefined module for browser type of task . 

port=8080 // step-2 :- create port number

myhttp.createServer((req,res)=>{        // step 3 :- create server

    res.write("This is created Server")  // step 4 :- for show on browser
    res.end()        // step 5 : - to end server process

    //var d=new Date()                                // create a server  
    //res.write(" "+d+" ");                           // For show on console  
    res.end()  
}).listen(port)  // step 6 :- for specify port number is use for run application

console.log("http://localhost:8080") // step 7 :- to show on console 