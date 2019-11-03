import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
        <form  className="form bg-dark text-light">
            <h3>Add an item to your wishlist</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Name of item"></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Price"></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Link"></input>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
        );
    }
}