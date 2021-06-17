# Shopping Wishlist

## Overview.

The web app is designed to display a shopping wishlist of a user

### Features:

- CRUD Functionality
- Total up the prices of all products
- Change the quantity of each product
- Filter by name, min price, max price
- Sort alphabetically, priority or price

## Setup.

An example of this webapp is available on https://kuhaneko.github.io/shopping-wishlist/

If you want to test it out locally, then you need to clone this code. Then you need to type in the following commands inside of the folder that you have cloned the code into:

`npm install`

`npm start`

## Data Model Design.
. . . Briefly explain any non-trivial aspects of the model . . . . .
The product has structured details of the product, such as the generated ID with UUID, the name of the product and the price. An example is provided below

~~~
{
    id: "sfwml1",
    priority: 1,
    name: "Steam Controller",
    price: 54.99,
    link: "https://store.steampowered.com/app/353370/",
    quantity: 1
}
~~~
## UI Design.


![][main]

>> The table lists each product in the datastore. This product list can be filtered by name, minimum price and maximum price. A product can be edited by clicking on the name of the product or deleted by clicking the trash icon.

![][detail]

>> The edit view allows the user to update an already existing product.

## Routing.

- / (public) - Displays all existing products and allows the user to submit a new product
- /item/:id (public) - Detailed view of a particular product. Allows the user to update the product.

## Storybook.

The following are the available components available in storybook 

![][stories]
[main]: ./readme_resources/main.png
[detail]: ./readme_resources/detail.png
[stories]: ./readme_resources/stories.png
