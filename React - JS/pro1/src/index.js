import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Middle from './components/Middle';


function Show() {
  return (

    <p>In C#, value-type parameters are that pass a copy of original value to the function rather than reference.
      It does not modify the original value. A change made in passed value does not alter the actual value.
      In the following example, we have pass value during function call.</p>

  )
}

function Show1() {
  return (
    <p>Microsoft .NET: This official Microsoft channel provides a wealth of content related to .NET development.
       It covers topics such as ASP.NET, .NET Core, C#, Azure, and more. You can find tutorials, demos, and updates on the latest 
       features and releases of the .NET framework. Visit the Microsoft .NET channel at https://www.youtube.com/c/NET.</p>
  )
}



class MyComponent extends React.Component  // React is a Package 
{
  render()
  {
    return(
      <p>Class Is a Component Based</p>
    )
  }
  
}

function LoginForm()
{
  return(
    <>
    <center>
      <table>
        <tr>
          <td>UserName</td>
          <td><input type='text' placeholder='Enter User Name'></input></td>
        </tr>
        <tr>
          <td>Password</td>
          <td><input type='text' placeholder='Enter User Password'></input></td>
        </tr>
        <tr>
          <td><input type='submit' value="login"></input></td>
        </tr>
      </table>
    </center>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
{/*      
   <React.StrictMode>
    <App />
     </React.StrictMode> 

    <center>
      <h3>Welcome in React Js</h3>
    </center>

    <Show />
    <Show />
    <Show />
    <Show />
    <Show />
    <div style={{"background-color":"orange"}}>
    <MyComponent/><MyComponent/><MyComponent/>
    </div>
    <Show1/><Show1/>
  */}

  {/* Login Form */}

  <Header/>
  <div style={{"backgroundColor":"green"}}>
  <LoginForm/>
  <Middle/>
</div>
  </> 




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
