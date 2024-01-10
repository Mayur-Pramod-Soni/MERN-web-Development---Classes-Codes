// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import Header from "./myScreens/Header";
import Home from "./myScreens/Home";
import Login from "./myScreens/Login";
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    {/* <Home/>
    <Header/>
    <Login/> */}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;