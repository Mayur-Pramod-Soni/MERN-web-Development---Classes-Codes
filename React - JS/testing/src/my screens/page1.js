import React from "react";

class Page1 extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        
        var data = true;

        
        if(data == 5%2 == 1)
        {
            return(
                <>
                <h1 style={{"color":"red"}}>Welcome to True Condition</h1>
                </>
            )
        }
        else
        {
            return(
                <>
                <h1 style={{"color":"Green"}}>Welcome to False Condition</h1>
                </>
            )
        }


        // var name = "Mayur Soni" 
        // return(
        //     <>
        //     <center>
        //     <h1>Hello World : {name}</h1>
        //     <p>User Name is : {this.props.name}</p>
        //     <p>Established Year is : {this.props.estb}</p>
        //     </center>
        //     </>

        // )
    }
}

export default Page1