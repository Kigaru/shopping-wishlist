import React, { Component, Fragment } from 'react';
import './App.css';
import Form from './components/wishlistForm';
import WishlistList from './components/wishlistList';
import * as api from './api';
import Filter from './components/filterControls'

export default class App extends Component {

  state = { name: "", minPrice: "", maxPrice: "", order: "priority", products: [{}] };

  addProduct = (name, price, link, quantity) => {
    api.add(name, parseFloat(price), link, quantity).then(resp => {
      api.getProduct(resp.productID).then(product => {
        this.setState({
          name: this.state.name,
          minPrice: this.state.minPrice,
          maxPrice: this.state.maxPrice,
          order: this.state.order,
          products: this.state.products.concat([product])
        });
      }
      )
    }
    )
  };

  removeItem = (id) => {
    api.remove(id);
    this.setState({ name: this.state.name, minPrice: this.state.minPrice, maxPrice: this.state.maxPrice, order: this.state.order, products: this.state.products });
  }

  filterProducts = (type, value) => {

    if (type === "name") {
      this.setState({ name: value, minPrice: this.state.minPrice, maxPrice: this.state.maxPrice, order: this.state.order, products: this.state.products })
    }
    else if (type === "minPrice") {
      this.setState({ name: this.state.name, minPrice: value, maxPrice: this.state.maxPrice, order: this.state.order, products: this.state.products })
    }
    else if (type === "maxPrice") {
      this.setState({ name: this.state.name, minPrice: this.state.minPrice, maxPrice: value, order: this.state.order, products: this.state.products })
    }
    else if (type === "order") {
      this.setState({ name: this.state.name, minPrice: this.state.minPrice, maxPrice: this.state.maxPrice, order: value, products: this.state.products })
    }
  }


  componentDidMount() {
    api.getAll().then(resp => {
      this.setState({
        name: this.state.name,
        minPrice: this.state.minPrice,
        maxPrice: this.state.value,
        order: this.state.order,
        products: resp.products
      });
    }).catch(console.error);
  };




  render() {

    let diplayedProducts = this.state.products;
    diplayedProducts = api.filterProducts(diplayedProducts, "name", this.state.name);
    diplayedProducts = api.filterProducts(diplayedProducts, "minPrice", parseFloat(this.state.minPrice));
    diplayedProducts = api.filterProducts(diplayedProducts, "maxPrice", parseFloat(this.state.maxPrice));
    diplayedProducts = api.sortProducts(diplayedProducts, this.state.order);

    return (
      <Fragment>
        <h1 className="text-center"><a href="/">Shopping Wishlist</a></h1>

        <hr />

        <div className="container-fluid">

          <div className="row">
            <div className="col-md-1"></div>

            <div className="col-md-3">
              <Form handleAdd={this.addProduct} />
            </div>

            <div className="col-md-8">
              <Filter filterProducts={this.filterProducts} />
              <WishlistList items={diplayedProducts} handleRemoveWithSorting={this.removeItem} />
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}
