// The product objectts and the array for all the products in the store
const products = [
    { id: 1, name: "Laptop", price: 1200, stock: 3 },
    { id: 2, name: "Mouse", price: 25, stock: 0 },
    { id: 3, name: "Keyboard", price: 75, stock: 5 },
    { id: 4, name: "Phone", price: 800, stock: 2 }
];

// The basket array which usually holds the products and it starts empty
let basket = [];

//Using a loop to display the products in the store
function viewProducts () {
    console.log("Available Products:");
    for (const product of products) {
        console.log(`${product.id}. ${product.name} - $${product.price} | Stock: ${product.stock}`);
    }
}

// Using  conditional statements to check if the product is in stock and if it is, add it to the basket
function addToBasket (productId) {
    let foundProduct = products.find(p => p.id === productId);
    if ( !foundProduct) {
        console.log("Product not found.");
        return;
    }

    // Checking if the product is out of stock and if it is, display a message to the user. If it is in stock, add it to the basket and display a message to the user.

    if (foundProduct.stock <= 0) {
        console.log(`Sorry, ${foundProduct.name} is out of stock!.`);
    } else {
        basket.push(foundProduct);
        foundProduct.stock--;
        console.log(`${foundProduct.name} added to basket.`);
    }
}

// Using a loop to display the products in the basket and calculate the total price of the products in the basket
function viewBasket () {
    if (basket.length === 0) {
        console.log("Your basket is empty!.");
        return;
    }
    let total = 0;
    console.log("Your Basket");
    for (const item of basket) {
        console.log(`${item.name} - $${item.price}`);
        total += item.price;
    }
    console.log(`TOTAL: $${total}`);

}

addToBasket(1);
addToBasket(2);
addToBasket(3);
addToBasket(4);
viewBasket();
viewProducts();