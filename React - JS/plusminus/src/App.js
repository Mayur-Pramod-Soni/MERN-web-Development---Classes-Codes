import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react' ;


// import { createStore } from "redux";

// import reducer from './Reducer'; // this line for import user define


import {connect } from 'react-redux';


// const store =createStore(reducer);

//store is a just variable,its contain data from complete store

// createstore (reducer) its contain reducer data

class App extends React.Component {

 
// create increment method and decrement method which is connects to Reducer....

  incr=()=>{
    this.props.dispatch({
      type:"INC"
    })
  }

  decr=()=>{
    this.props.dispatch({
      type:"DEC"
    })
  }


  render() // render method load and show ui 
  {
   return(
    <div className="App mt-5">


    <button onClick={this.incr} className='btn btn-success me-5'>Increment</button>
    <button onClick={this.decr} className='btn btn-success'>Decrement</button>
    <h1>{this.props.count}</h1>


    </div>
   );
  }


}

const mapStateToProps=(State)=>{
  return{
    count:State.count
  }
}

export default connect(mapStateToProps)(App);
//export default App;
