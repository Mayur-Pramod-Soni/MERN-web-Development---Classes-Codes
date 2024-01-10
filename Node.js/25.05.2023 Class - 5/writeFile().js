myfs.writeFileSync("hii.txt","Welcome",function(err){
    if(err)
    {
        console.log("Something Wrong")
    }
    console.log("Success")
})


// myfs.writeFileSync("hello.txt","hello-World")

// console.log("Successfully create file")

// myfs.writeFileSync("E://hello.html","Hello-World")

console.log("Successfully create file")