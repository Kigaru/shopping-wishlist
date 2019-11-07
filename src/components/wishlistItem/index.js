import React, { Component, Fragment } from 'react';

export default class WishlistItem extends Component {
    
    
    increaseQuantity = (e) => this.props.handleModifyQuantity(this.props.item.id,1);
    
    decreaseQuantity = (e) => {
            if(this.props.item.quantity > 1) {
                this.props.handleModifyQuantity(this.props.item.id, -1);
            }
        }

    removeProduct = (e) => {

        this.props.handleRemove(this.props.item.id);  
    }



    render() {

        let data = this.props.item;
        return (
        <Fragment>
            <tr>
            
           
            
            <td scope="row">
            {data.priority}
            </td>
            
            
                <td scope="row">
                <button className="btn btn-link btn-block" style={{"text-decoration": "none", "color": "black", "padding": "0"}}>

                    <div className="text-left">
                        {data.name}
                        </div>
                        </button>
            
                </td>

            <td scope="row">
                <input type="button" value="-" className="btn-danger" onClick={this.decreaseQuantity} />
                {data.quantity}
                <input type="button" value="+" className="btn-success" onClick={this.increaseQuantity} />
            </td>
            <td scope="row">€{data.price}</td>
            <td scope="row"><a target="_blank" href={data.link}><span className="glyphicon glyphicon-globe"></span></a></td>
            <td scope="row"><button type="button" className="glyphicon btn-m glyphicon-trash btn-link" onClick={this.removeProduct} /></td>
            </tr>

        </Fragment>
          );
      }
  }