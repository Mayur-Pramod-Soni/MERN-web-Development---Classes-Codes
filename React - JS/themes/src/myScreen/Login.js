import React from "react";
import Header from "./Header";
class Login extends React.Component
{
    render()
    {
        return(
            <>
            {/* <Header/> */}
            <div className="container  mt-5">
                <div className ="text-center">
                    <h3>WELCOME IN LOGIN PAGE</h3>
                    <form >
                        <div className="">
                            <div className="col-12 mt-5">
                                <input className="form-control" type="text" placeholder="enter name"/>
                            </div>
                            <div className="col-12 mt-3"> 
                                <input className="form-control" type="password" placeholder="Enter Password"/>
                            </div>
                            <div className="col-12 mt-5">
                                <input className="form-control btn btn-primary " type ="submit"  value="Login"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    }
}

export default Login