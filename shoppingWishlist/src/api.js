import axios from 'axios';
import lodash from 'lodash';
import * as api from './api';

export const getAll = () => {
  return axios('/api/products')
    .then(resp => resp.data);
};

export const add = (newName, newPrice, newLink, newQuantity) => {
  return axios.post('/api/products', { name: newName, price: newPrice, link: newLink, quantity: newQuantity })
    .then(resp => resp.data);
};

export const getProduct = (id) => {

  return axios.get(`/api/products/${id}`)
    .then(resp => resp.data);

};

export const updateProduct = (id, newName, newPrice, newLink, newQuantity) => {
  return axios.put(`/api/products/${id}`, { _id: id, name: newName, price: newPrice, link: newLink, quantity: newQuantity })
    .then(resp => resp.data)
};

export const remove = (id) => {
  return axios.delete(`/api/products/${id}`)
    .then(resp => resp.data);
};

export const modifyQuantity = (id, number) => {
  api.getProduct(id).then(done => {
    api.updateProduct(id, done.name, done.price, done.link, parseInt(done[0].quantity) + number);
  });

};

export const filterProductsByText = (array, type, filter) => {
  if (filter === "") {
    return array;
  }
  else {
    return array.filter(c => {
      const toSearch = `${c[type]}`;
      return toSearch.toLowerCase().search(filter) !== -1;
    });
  }
};

export const filterProductsByPriceMoreLessThan = (array, type, filter) => {
  if (isNaN(filter)) {

    return array;
  }
  else {
    return array.filter(c => {
      const toSearch = `${c.price}`;
      if (type === "minPrice") {
        return toSearch > filter;
      }
      else if (type === "maxPrice") {
        return toSearch < filter;
      }
      else return false;
    });

  }
};

export const filterProducts = (array, type, filter) => {
  if (type === "minPrice" || type === "maxPrice") {
    return api.filterProductsByPriceMoreLessThan(array, type, filter);
  }
  else {
    return api.filterProductsByText(array, type, filter);
  }
};

export const sortProducts = (array, order) => {
  return lodash.sortBy(array, [order]);
};



// const api = {

//   sortPriorities: () => {
//     let index = 1;
//     for (let product in products) {
//       products[product].priority = products[product].priority === index ? products[product].priority : index;
//       index++;
//     }
//   },

//   
// export default api;