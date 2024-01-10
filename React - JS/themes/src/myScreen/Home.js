import React from "react";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends React.Component
{
    render()
    {
        return(
            <>
            <h1>Welcome This is Home Page</h1>
            <button className="btn btn-warning">Welcome</button>
            </>
        )
    }
}

export default Home