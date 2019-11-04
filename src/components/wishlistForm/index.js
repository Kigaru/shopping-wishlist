import React, { Component } from 'react';

export default class Form extends Component {
    
  state = {name: "", price: "", link: ""}
  
  handleNameChange = (e) => this.setState({name: e.target.value});
  handlePriceChange = (e) => this.setState({price: e.target.value});
  handleLinkChange = (e) => this.setState({link: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.name, this.state.price,this.state.link);
    this.setState({name: "", price: "", link: ""});
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
            <button type="submit" className="btn btn-primary"
            onClick={this.handleSubmit}>Add</button>
        </form>
        );
    }
}