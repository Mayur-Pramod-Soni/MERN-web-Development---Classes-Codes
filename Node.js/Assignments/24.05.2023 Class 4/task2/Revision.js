var myhttpvar=require('http')

// myhttp is just object based on http module

port = 6699

myhttpvar.createServer(function(request,responce){     // Call by Process

    responce.write("This is http module based app") // Shows on web page 
    responce.end()

}).listen(port)

console.log("First Use htttp")    // show in integrated port
console.log("Port is "+port)         // show in integrated port
console.log("http://localhost:"+port)     // show in integrated port
