import React, { Component } from 'react';
import './App.css';
import Form from './components/wishlistForm';
import WishlistList from './components/wishlistList';
import WishlistItem from './components/wishlistItem';

export default class App extends Component {
  render() {
    const testItems = [
      {
        id: 1,
        name: "Steam Controller",
        price: 54.99,
        link: "https://store.steampowered.com/app/353370/"
      },
      {
        id: 2,
        name: "Valve Index",
        price: 1079,
        link: "https://store.steampowered.com/sub/354231/"
      },
      {
        id: 3,
        name: "Rocket League on Nintendo Switch",
        price: 19.99,
        link: "https://www.nintendo.com/games/detail/rocket-league-switch/"
      },
      {
        id: 4,
        name: "DualShock 4 Wireless Controller for PlayStation 4 - Magma Red",
        price: 44.10,
        link: "https://www.amazon.com/DualShock-Wireless-Controller-PlayStation-Magma-4/dp/B01MD19OI2?pf_rd_p=190167bc-8caf-4fc0-8d35-69c23fc562c8&pd_rd_wg=RICuo&pf_rd_r=STERBJFCFYC491G74A7T&ref_=pd_gw_unk&pd_rd_w=Sl0RK&pd_rd_r=5b1da968-da23-418c-969c-4376f15cdb96&th=1"
      }
    ]



  return (
    <div className="jumbotron">
      <h1 className="text-center"><a href="/">Shopping Wishlist</a></h1>

      <hr/>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          
          <div className="col-md-3">
              <Form />
          </div>
            
          <div className="col-md-8">
            <WishlistList items = {testItems} />
          </div>
        </div>    
      </div>   
      
    </div>
    );
  }
}
