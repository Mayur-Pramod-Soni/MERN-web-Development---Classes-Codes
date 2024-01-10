
exports.msj="Orlando-Academy"
exports.studentname="xyz"

exports.check=function(amount,name)
{
    var balance = 900
    if(balance>=amount)
    {
        console.log("Withdrawl Success "+name)
        console.log("available Amount is = "+(balance-amount))
    }
    else
    {
        console.log("Insufficient-amount "+name)
    }
}
