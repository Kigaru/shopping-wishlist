import React, { Component } from 'react';
import './App.css';
import Form from './components/wishlistForm';
import WishlistList from './components/wishlistList';
import api from './dataStore/stubAPI'

export default class App extends Component {
  addProduct = (name,price,link,quantity) => {
    api.add(name,parseFloat(price),link,quantity);
    this.setState({});
  };


  render() {
    return (
    <div className="jumbotron">
      <h1 className="text-center"><a href="/">Shopping Wishlist</a></h1>

      <hr/>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          
          <div className="col-md-3">
              <Form handleAdd={this.addProduct}/>
          </div>
            
          <div className="col-md-8">
            <WishlistList items = {api.getAll()} />
          </div>
        </div>    
      </div>
      
    </div>
    );
  }
}
