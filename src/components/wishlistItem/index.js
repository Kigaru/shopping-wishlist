import React, { Component, Fragment } from 'react';

export default class WishlistItem extends Component {
    
    
    increaseQuantity = (e) => this.props.handleModifyQuantity(this.props.item.id,1);
    
    decreaseQuantity = (e) => {
            if(this.props.item.quantity > 1) {
                this.props.handleModifyQuantity(this.props.item.id, -1);
            }
        }



    render() {

        let data = this.props.item;

        return (
        <Fragment>
            <tr>
            <td scope="row">{data.id}</td>
            <td scope="row">{data.name}</td>
            <td scope="row">
                <input type="button" value="-" className="btn-danger" onClick={this.decreaseQuantity} />
                {data.quantity}
                <input type="button" value="+" className="btn-success" onClick={this.increaseQuantity} />
            </td>
            <td scope="row">€{data.price}</td>
            <td scope="row"><a target="_blank" href={data.link}><span className="glyphicon glyphicon-globe"></span></a></td>
            <td scope="row"><a href="#"><span className="glyphicon glyphicon-trash"></span></a></td>
            </tr>
        </Fragment>
          );
      }
  }