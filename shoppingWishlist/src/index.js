import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ItemDetails from "./components/itemDetails"



class Router extends Component {
    render() {
        return (
           <BrowserRouter>
            <div className="jumbotron">
              <div className="container-fluid ">
                <Switch>
                  <Route path="/item/:id" component={ItemDetails} />
                  <Route exact path="/" component={App} />
                  <Redirect from="*" to="/" />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        );
      }
}




ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change 
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
