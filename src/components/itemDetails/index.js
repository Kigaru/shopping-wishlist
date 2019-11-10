import React, {Component, Fragment} from "react";
import { withRouter } from "react-router-dom";
import api from '../../dataStore/stubAPI'

export default class ItemDetails extends Component {

  item = api.getProduct(this.props.match.params.id);
  state = {name: this.item.name, price: this.item.price, link: this.item.link, quantity: this.item.quantity};
  
  handleNameChange = (e) => this.setState({name: e.target.value});
  handlePriceChange = (e) => this.setState({price: e.target.value});
  handleLinkChange = (e) => this.setState({link: e.target.value});
  handleQuantityChange = (e) => this.setState({quantity: e.target.value});


  handleUpdate = (e) => {
    e.preventDefault();
    let money = 0;
    if(!isNaN(parseInt(this.state.price))) {money = this.state.price}
    api.updateProduct(this.item.id, this.state.name, money, this.state.link, this.state.quantity);
    this.setState({name: this.item.name, price: this.item.price, link: this.item.link, quantity: this.item.quantity});
  }

  render() {
   return (
    <Fragment>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">

        <h3> Item id: {this.item.id} </h3>
        
        

        <form  className="form bg-dark text-light">
            <h3>Edit {this.item.name}</h3>
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
              <button type="submit" className="btn btn-success"
            onClick={this.handleUpdate}>Update</button>
          </form>

          <a href="/home"><button className="btn btn-primary text-center">Go Back</button></a>

          </div>
          <div className="col-sm-4"></div>

          </div>
          
    </Fragment>
  );
  }
}