import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import WishlistItem from '../components/wishlistItem/'
import WishlistList from '../components/wishlistList';
import Filter from '../components/filterControls/';
import Form from '../components/wishlistForm';
import ItemDetails from '../components/itemDetails';


const sample = [{
    id: "sfwml1",
    priority: 1,
    name: "Steam Controller",
    price: 54.99,
    link: "https://store.steampowered.com/app/353370/",
    quantity: 1
}]

storiesOf("Shopping Wishlist/Wishlist Item", module).add("default", () => (
  <table className="table table-hover">
  <tbody>
  <WishlistItem item={sample[0]} />
  </tbody>
  </table>
));     

storiesOf("Shopping Wishlist/Wishlist List", module).add("default", () => (
    <WishlistList items={sample} />
));   

storiesOf("Shopping Wishlist/Filter Controls", module).add("default", () => (
  <Filter />
));   

storiesOf("Shopping Wishlist/Form", module).add("default", () => (
  <Form />
));