import lodash from "lodash";

class StubAPI {
    constructor() {
        this.products = [
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
        ];
    }

    getAll() {
        return this.products;
    }

    add(name, price, link) {
        let id = 1;
        let last = lodash.last(this.products);
        if (last) { //if last has a number, else leave it as it is
        id = last.id + 1;
        }
        let len = this.products.length;
        let newLen = this.products.push({
        id,
        name,
        price,
        link
        });
        return newLen > len; //return true if the length of the new list is bigger than the old list
    }

    getProduct(id) {
        let index = lodash.findIndex(this.products, product => product.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }

}


export default new StubAPI();