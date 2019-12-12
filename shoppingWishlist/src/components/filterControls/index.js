import React, { Component } from 'react';

export default class Form extends Component {
    
  handleChange = (e, type, value) => {
    e.preventDefault();
    this.props.filterProducts(type, value);
};

  handleNameChange = (e) => this.handleChange(e, "name", e.target.value);
  handlePriceMinChange = (e) => this.handleChange(e, "minPrice", e.target.value);
  handlePriceMaxChange = (e) => this.handleChange(e, "maxPrice", e.target.value);
  handleSelect = (e) => this.handleChange(e, "order", e.target.value);

  render() {
        return (
        <form  className="form bg-dark text-light">
            <div className="row">
            <div className="form-group col-sm-3">
            <b>Filters</b>
              <input type="text"
                className="form-control"
                placeholder="Name of item"
                onChange={this.handleNameChange}></input>
            </div>
            <div className="form-group col-sm-1">
              <div>min:</div>
              <input type="text"
                className="form-control"
                placeholder="€    Min Price"
                onChange={this.handlePriceMinChange} />
            </div>
            <div className="form-group col-sm-1"> 
            <div>max:</div>
              <input type="text"
                className="form-control"
                placeholder="€    Max Price"
                onChange={this.handlePriceMaxChange}></input>
            </div>
            <div className="form-group col-sm-2"> 
            <div>order by:</div>
              <select className="form-control" name="orderBy" onChange={this.handleSelect}>
                <option value="priority">Priority</option>
                <option value="name">Alphabetical</option>
                <option value="price">Price</option>
              </select>
            </div>
            </div>
          </form>
        );
    }
}