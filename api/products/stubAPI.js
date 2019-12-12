import lodash from "lodash";
import uuid from "uuid";


const api = {

  sortPriorities: () => {
    let index = 1;
    for (let product in products) {
      products[product].priority = products[product].priority === index ? products[product].priority : index;
      index++;
    }
  },

getAll: () => {
    return products;
  },

remove: (id) => {
    lodash.remove(products, { id: id });
    api.sortPriorities();
    console.log("removed item with an id of: " + id);
  },

add: (name, price, link, quantity) => {
    let priority = 1;
    let last = lodash.last(products);
    if (last) { //if last exists, else leave it as it is
      priority = last.priority + 1;
    }
    let len = products.length;
    let id = uuid();
    let newLen = products.push({
      id,
      priority,
      name,
      price,
      link,
      quantity
    });
    return newLen > len ? id : false; //return the id if the length of the new list is bigger than the old list
  },

modifyQuantity: (id, number) => {
    let change = api.getProduct(id).quantity;
    api.getProduct(id).quantity = parseInt(api.getProduct(id).quantity) + number;
    if (change !== api.getProduct(id).quantity) return true;
  },

getProduct: (id) => {
    let index = lodash.findIndex(products, product => product.id === id);
    let result = index !== -1 ? products[index] : null;
    return result;
  },


sortProducts: (array, order) => {
    return lodash.sortBy(array, [order]);
  },

updateProduct: (id, name, price, link, quantity) => {
    api.getProduct(id).name = name;
    api.getProduct(id).price = price;
    api.getProduct(id).link = link;
    api.getProduct(id).quantity = quantity;
  }
};
export default api;