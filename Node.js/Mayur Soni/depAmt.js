
exports.check = function(dep,name){
    var balance=0

    balance = balance+dep;
    var d = new Date();
    
    console.log("Deposite amount "+dep)
    console.log(name+" current Ammount "+balance+" Time "+d.toLocaleString())

    
}