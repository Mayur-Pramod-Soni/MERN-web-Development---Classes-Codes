import logo from './logo.svg';
import './App.css';
import Header from './Layouts/Header';
import Home from './Layouts/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Images from './Layouts/Images';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <Header/>
      <Home/> */}
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Images' element={<Images/>}/>
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;