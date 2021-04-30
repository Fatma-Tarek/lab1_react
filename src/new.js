import React, { Component } from 'react';
import './App.css';
import App2 from './Login';
import App3 from './ToDoList';
import App4 from './Movies';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

    
  

class App extends Component {
    constructor(props){
        super();
        this.state={
            render:"",
            
        }
        
    }

    rerenderParentCallback=()=> {
        this.forceUpdate();
      }
    logout=()=>{
        localStorage.removeItem("logged");
        this.forceUpdate();
    }   
    render() {
        let style={
            color:"Cyan"
        }
            if(localStorage.logged){
            
                return (
                
                <Router className="App">
                    <div>
         
                            <div >
                                <Link to="/" className="m-2">To-Do </Link>    
                                <Link to="/movies" className="m-2">Movies </Link><br></br>
                                <button  onClick={this.logout}>Logout</button>
                            </div>
                    
                            
                    
                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL.
                            className="m-2 btn text-white" */}
                        <Switch>
                        <Route path="/movies">
                            <App4></App4>
                        </Route>
                        <Route path="/">
                            <App3></App3>
                        </Route>
                        </Switch>
                    </div>
                </Router>
        
                );
            }
            else{
                return (
                    <App2 rerenderParentCallback={this.rerenderParentCallback}></App2>
                );
            }
    }
}


    export default App;