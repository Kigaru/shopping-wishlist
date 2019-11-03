import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="jumbotron">
      <h1 className="text-center"><a href="/">Shopping Wishlist</a></h1>

      <hr/>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          
          <div className="col-md-3">
              <p>form goes here</p>
          </div>
            
          <div className="col-md-8">
            <p>table goes here</p>
          </div>
        </div>    
      </div>   
      
    </div>
  );
}

export default App;
