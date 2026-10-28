const products = [
    { id: 1, name: "Laptop", price: 1200, stock: 3 },
    { id: 2, name: "Mouse", price: 25, stock: 0 },
    { id: 3, name: "Keyboard", price: 75, stock: 5 },
    { id: 4, name: "Phone", price: 800, stock: 2 }
];

let basket = [];
function viewProducts () {
    console.log("Available Products:");
    for (const product of products) {
        console.log(`${product.id}. ${product.name} - $${product.price} | Stock: ${product.stock}`);
    }
}

function addToBasket (productId) {
    let foundProduct = products.find(p => p.id === productId);
    if ( !foundProduct) {
        console.log("Product not found.");
        return;
    }

    if (foundProduct.stock <= 0) {
        console.log(`Sorry, ${foundProduct.name} is out of stock!.`);
    } else {
        basket.push(foundProduct);
        foundProduct.stock
        console.log(`${foundProduct.name} added to basket.`);
    }
}

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