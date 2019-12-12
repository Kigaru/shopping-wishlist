import React, { Component } from 'react';

export default class Form extends Component {
    
  state = {name: "", price: "", link: "", quantity: "1"}
  
  handleNameChange = (e) => this.setState({name: e.target.value});
  handlePriceChange = (e) => this.setState({price: e.target.value});
  handleLinkChange = (e) => this.setState({link: e.target.value});
  handleQuantityChange = (e) => this.setState({quantity: e.target.value});
  increaseQuantity = (e) => this.setState({quantity: parseInt(this.state.quantity)+1});
  decreaseQuantity = (e) => {
    
    if(parseInt(this.state.quantity) > 1) {
      this.setState({quantity: parseInt(this.state.quantity)-1})
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let money = 0;
    if(!isNaN(parseInt(this.state.price))) {money = this.state.price}
    this.props.handleAdd(this.state.name, money, this.state.link, this.state.quantity);
    this.setState({name: "", price: "", link: "", quantity: "1"});
  }

  render() {
        return (
        <form  className="form bg-dark text-light">
            <h3>Add an item to your wishlist</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Name of item"
                value= {this.state.name}
                onChange={this.handleNameChange}></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Price"
                value= {this.state.price}
                onChange={this.handlePriceChange}></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Link"
                value= {this.state.link}
                onChange={this.handleLinkChange}></input>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">
              <input type="button" value="-" className="btn btn-danger" onClick={this.decreaseQuantity} />
              </div>

              <div className="col-sm-8">
              <input type="text" className="form-control" value= {this.state.quantity} onChange={this.handleQuantityChange}></input>
              </div>

              <div className="col-sm-2">
                <input type="button" value="+" className="btn btn-success" onClick={this.increaseQuantity} />
              </div>


            </div>
            <button type="submit" className="btn btn-primary"
            onClick={this.handleSubmit}>Add</button>
          </form>
        );
    }
}