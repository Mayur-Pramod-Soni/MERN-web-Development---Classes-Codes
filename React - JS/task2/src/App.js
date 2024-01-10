import logo from './logo.svg';
import './App.css';
import task2, { About, Contact, Home } from './components/task2';



function App() {
  return (
    <>
    <div className="App">
     <h1>Welcome to new Task2 Project</h1>
      <Home name="Mayur Soni"/> 
            {/* <h1 className = "home" >{25+20}</h1>    */}
    {/* <Home/> */}
     <About/>
     <Contact name="Mayur" myimg="https://www.bollywoodbiography.in/wp-content/uploads/2017/05/hrithik.jpg"/>
    </div>
    </>
  );
}

export default App;
