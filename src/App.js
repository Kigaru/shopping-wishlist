import React, { Component } from 'react';
import './App.css';
import Form from './components/wishlistForm';
import WishlistList from './components/wishlistList';
import api from './dataStore/stubAPI'
import Filter from './components/filterControls'

export default class App extends Component {

  state = {name: "", minPrice: "", maxPrice: "", order: "priority"}

  addProduct = (name,price,link,quantity) => {
    api.add(name,parseFloat(price),link,quantity);
    this.setState({order: this.state.order});
  };

  filterProducts = (type, value) => {
    
    if(type === "name") {
      this.setState({name: value, minPrice: this.state.minPrice, maxPrice: this.state.maxPrice, order: this.state.order})
    }
    else if(type === "minPrice") {
      this.setState({name: this.state.name, minPrice: value, maxPrice: this.state.maxPrice, order: this.state.order})
    }
    else if(type === "maxPrice") {
      this.setState({name: this.state.name, minPrice: this.state.minPrice, maxPrice: value, order: this.state.order})
    }
    else if(type === "order") {
      this.setState({name: this.state.name, minPrice: this.state.minPrice, maxPrice: this.state.maxPrice, order: value})
    }
  }


  render() {


    let diplayedProducts = api.getAll();
    diplayedProducts = api.filterProducts(diplayedProducts, "name" ,this.state.name);
    diplayedProducts = api.filterProducts(diplayedProducts, "minPrice",parseFloat(this.state.minPrice));
    diplayedProducts = api.filterProducts(diplayedProducts, "maxPrice",parseFloat(this.state.maxPrice));
    diplayedProducts = api.sortProducts(diplayedProducts, this.state.order);

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
          <Filter filterProducts={this.filterProducts} />
            <WishlistList items = {diplayedProducts} />
          </div>
        </div>    
      </div>
      
    </div>
    );
  }
}
