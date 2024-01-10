import React from "react";
import Header from "./Header";


// class  Home extends React.Component
// {
//     render()
//     {
//         return(
//             <>
//             <Header/>
//             <h1>welcome to home page</h1>
//             <button className="btn btn-warning">welcome</button>
//             </>
//         )
//     }
// }
// export default Home

class Home extends React.Component
{
    render()
    {
        return(
            <>
            <Header/>
            <h1>Welcome This is Home Page</h1>
            <button className="btn btn-warning">Welcome</button>
            </>
        )
    }
}

export default Home