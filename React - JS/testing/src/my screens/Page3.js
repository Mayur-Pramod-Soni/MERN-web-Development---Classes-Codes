import React from "react";

class Page3 extends React.Component
{
    render()
    {
        var list = ["Camera","IPhone","Samsung","Plywood"]

        var items = list.map((element)=>
            <li>{element}</li>
        )



         var isActive = false ;
        if(isActive)
        {
            return(
                <>
                <center>
                <h1>Welcome To Home Page of MAS</h1>
                <button>For Logout click Here </button>
                <ol>{items}</ol>
                </center>
                </>
            )
        }
        else
        {
            return(
                <>
                <center>
                <h1>Welcome To Login Page of MAS</h1>
                <button>For Login click Here </button>
                <ol>{items}</ol>
                </center>
                </>
            )
        }
    }

}

export default Page3