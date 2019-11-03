import React from 'react';
import './App.css';
import Form from './components/wishlistForm';

function App() {
  return (
    <div className="jumbotron">
      <h1 className="text-center"><a href="/">Shopping Wishlist</a></h1>

      <hr/>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          
          <div className="col-md-3">
              <Form />
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
