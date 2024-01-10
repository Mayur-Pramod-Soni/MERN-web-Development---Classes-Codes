import './task2.css';

export function About()
{
    return(
        <>
            <div class="about">
                <center>
                    <h3>Welcome to About Component</h3>
                </center>
            </div>
        </>
    )
}

export function Home(props1)
{
    return(
        <>
            <div class="home">
            <h3>{props1.name}</h3>
            <center>
                    <h3>Welcome to Home component</h3>
            </center>
            </div>
        </>
    )
}

export function Contact(props)
{
    return(
        <>
            <div class="contact">
                <center>
                    <img src={props.myimg} style={{"height":"200px","width":"300px"}}></img><br></br>
                    <h3>User Name is : {props.name}</h3>

                    {/* <h3>Welcome to Contact Component</h3> */}
                </center>
                <h4>..............................................</h4>
            </div>
        </>
    )
}

export default (Home,About,Contact)