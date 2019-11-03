import React, { Component } from 'react';
import WishlistItem from '../wishlistItem/';

export default class WishlistList extends Component {
    render() {

        let totalPrice = 0;

        const wishlistItems = this.props.items.map(c => (
            totalPrice += c.price,
            <WishlistItem key={c.id} item={c} />
        ));

        return (

        <table class="table table-hover">
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Link</th>
            <th scope="col">Remove</th>
            </tr>
            </thead>
            <tbody>
                {wishlistItems}

                <tr>
            <td scope="row"></td>
            <td scope="row">No. of items: {this.props.items.length} item(s)</td>
            <td scope="row"></td>
            <th scope="row">Total:</th>
            <td scope="row">€{totalPrice}</td>
            </tr>
            </tbody>
            </table>

        );
    }
}