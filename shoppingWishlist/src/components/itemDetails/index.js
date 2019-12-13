import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import * as api from '../../api';

export default class ItemDetails extends Component {
  state = {
    name: "",
    price: "",
    link: "",
    quantity: "",
    item: ""
  };

  handleNameChange = (e) => this.setState({ name: e.target.value });
  handlePriceChange = (e) => this.setState({ price: e.target.value });
  handleLinkChange = (e) => this.setState({ link: e.target.value });
  handleQuantityChange = (e) => this.setState({ quantity: e.target.value });

  increaseQuantity = () => {
    this.setState( {quantity: this.state.quantity + 1});
  }

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({quantity: this.state.quantity - 1});
    }
  }


  handleUpdate = (e) => {
    e.preventDefault();
    let money = 0;
    if (!isNaN(parseInt(this.state.price))) { money = this.state.price }
    api.updateProduct(this.state.item._id, this.state.name, money, this.state.link, this.state.quantity);
    this.setState({ name: this.state.name, price: this.state.price, link: this.state.link, quantity: this.state.quantity });
  }


  componentDidMount() {
    api.getProduct(this.props.match.params.id).then(resp => {
      this.setState({
        name: resp[0].name,
        price: resp[0].price,
        link: resp[0].link,
        quantity: resp[0].quantity,
        item: resp[0]
      });
    }).catch(console.error);
  };


  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">

            <h3> Item id: {this.state.item._id} </h3>



            <form className="form bg-dark text-light">
              <h3>Edit {this.state.item.name}</h3>
              <div className="form-group">
                <input type="text"
                  className="form-control"
                  placeholder="Name of item"
                  value={this.state.name}
                  onChange={this.handleNameChange}></input>
              </div>
              <div className="form-group">
                <input type="text"
                  className="form-control"
                  placeholder="Price"
                  value={this.state.price}
                  onChange={this.handlePriceChange}></input>
              </div>
              <div className="form-group">
                <input type="text"
                  className="form-control"
                  placeholder="Link"
                  value={this.state.link}
                  onChange={this.handleLinkChange}></input>
              </div>
              <div className="form-group row">
                <div className="col-sm-2">
                  <input type="button" value="-" className="btn btn-danger" onClick={this.decreaseQuantity} />
                </div>

                <div className="col-sm-8">
                  <input type="text" className="form-control" value={this.state.quantity} onChange={this.handleQuantityChange}></input>
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