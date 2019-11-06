import lodash from "lodash";
import uuid from "uuid";

class StubAPI {
    constructor() {
        this.products = [
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
    }

    sortPriorities() {
      let index = 1;
      for(let product in this.products) {
        this.products[product].priority = this.products[product].priority === index ? this.products[product].priority : index;
        index++;
      }
    }

    getAll() {
        return this.products;
    }

    remove(id) {
      lodash.remove(this.products, {id: id});
      this.sortPriorities();
      console.log("removed item with an id of: " + id);

    }

    add(name, price, link, quantity) {
        let priority = 1;
        let last = lodash.last(this.products);
        if (last) { //if last exists, else leave it as it is
          priority = last.priority + 1;
        }
        let len = this.products.length;
        let id = uuid();
        let newLen = this.products.push({
        id,
        priority,
        name,
        price,
        link,
        quantity
        });
        console.log("added item " + name + " with an id of: " + id);
        return newLen > len; //return true if the length of the new list is bigger than the old list
    }

    modifyQuantity(id, number) {
      let change = this.getProduct(id).quantity;
      this.getProduct(id).quantity = parseInt(this.getProduct(id).quantity) + number; 
      if(change !== this.getProduct(id).quantity) return true;
    }

    getProduct(id) {
        let index = lodash.findIndex(this.products, product => product.id === id);
        let result = index !== -1 ? this.products[index] : null;
        return result;
    }

}


export default new StubAPI();