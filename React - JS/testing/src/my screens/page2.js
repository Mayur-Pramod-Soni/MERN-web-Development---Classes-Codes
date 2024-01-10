import React from "react";

class Page2 extends React.Component
{
    render()
    {
        var isActive = 52%10 ;
        // var isActive = false ;
        if(isActive > 4)
        {
            return(
                <>
                <center>
                <h1>Welcome To Home Page of MAS</h1>
                <button>For Logout click Here </button>
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
                </center>
                </>
            )
        }
    }

}

export default Page2