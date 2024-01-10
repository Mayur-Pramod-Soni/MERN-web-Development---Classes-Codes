var myfs = require("fs")

// myfs.writeFileSync("hello.txt","hello-World")

// console.log("Successfully create file")

myfs.writeFileSync("E://hello.html","Hello-World")

// console.log("Successfully create file")
// console.log("Success")


myfs.readFile("hello.txt",function(err,data){
    if(err)
    {
        console.log(err)
    }
    else 
    {
        console.log(data.toString())
    }
})