import productModel from './api/products/productModel';

const products = [
  {
    _id: "sfwml1",
    priority: 1,
    name: "Steam Controller",
    price: 54.99,
    link: "https://store.steampowered.com/app/353370/",
    quantity: 1
  },
  {
    _id: "sfwml2",
    priority: 2,
    name: "Spice&Wolf VR",
    price: 20.99,
    link: "https://store.steampowered.com/app/1065970",
    quantity: 1
  },
  {
    _id: "sfwml3",
    priority: 3,
    name: "Rocket League on Nintendo Switch",
    price: 19.99,
    link: "https://www.nintendo.com/games/detail/rocket-league-switch/",
    quantity: 1
  },
  {
    _id: "sfwml4",
    priority: 4,
    name: "DualShock 4 Wireless Controller for PlayStation 4 - Magma Red",
    price: 44.10,
    link: "https://www.amazon.com/DualShock-Wireless-Controller-PlayStation-Magma-4/dp/B01MD19OI2?pf_rd_p=190167bc-8caf-4fc0-8d35-69c23fc562c8&pd_rd_wg=RICuo&pf_rd_r=STERBJFCFYC491G74A7T&ref_=pd_gw_unk&pd_rd_w=Sl0RK&pd_rd_r=5b1da968-da23-418c-969c-4376f15cdb96&th=1",
    quantity: 1
  },
];

export default async function loadProducts() {
  try {
    await productModel.deleteMany();
    await productModel.collection.insertMany(products);
    console.info(`${products.length} products were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Product Data: ${err}`);
  }
}