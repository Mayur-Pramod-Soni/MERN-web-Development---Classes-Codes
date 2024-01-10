import React from "react";

class Page4 extends React.Component
{
    // constructor ()
    // {
        // setTimeout(() => {
        //     this.setTimeout({name:'Bye Bye Mayur'})
        // }, 5000);
    // }

    state = {
        name:'Mayur'
    }
    
    updaterecord()
    {
        this.setState({name:'Bye Bye Mayur'})
    }
    
    render()
    {
        return(
            <>
            <center>
            <h1>User Name : {this.state.name}</h1>
            <button onClick={()=>this.updaterecord()} >Update Output</button>
            </center>
            </>
        )
    }
}

export default Page4