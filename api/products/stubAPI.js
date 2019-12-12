import lodash from "lodash";
import uuid from "uuid";

const products = [
  {
    id: "sfwml1",
    priority: 1,
    name: "Steam Controller",
    price: 54.99,
    link: "https://store.steampowered.com/app/353370/",
    quantity: 1
  },
  {
    id: "sfwml2",
    priority: 2,
    name: "Spice&Wolf VR",
    price: 20.99,
    link: "https://store.steampowered.com/app/1065970",
    quantity: 1
  },
  {
    id: "sfwml3",
    priority: 3,
    name: "Rocket League on Nintendo Switch",
    price: 19.99,
    link: "https://www.nintendo.com/games/detail/rocket-league-switch/",
    quantity: 1
  },
  {
    id: "sfwml4",
    priority: 4,
    name: "DualShock 4 Wireless Controller for PlayStation 4 - Magma Red",
    price: 44.10,
    link: "https://www.amazon.com/DualShock-Wireless-Controller-PlayStation-Magma-4/dp/B01MD19OI2?pf_rd_p=190167bc-8caf-4fc0-8d35-69c23fc562c8&pd_rd_wg=RICuo&pf_rd_r=STERBJFCFYC491G74A7T&ref_=pd_gw_unk&pd_rd_w=Sl0RK&pd_rd_r=5b1da968-da23-418c-969c-4376f15cdb96&th=1",
    quantity: 1
  }
];


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