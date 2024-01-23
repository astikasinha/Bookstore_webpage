var shoppingCart = [];

function addToCart(bookName, price) {
    // Create an object representing the item to add to the cart
    var cartItem = {
        bookName: bookName,
        price: price
    };

    // Add the item to the shopping cart
    shoppingCart.push(cartItem);

    // Display a confirmation message (you can customize this part)
    alert(`Added ${bookName} to cart. Price: ${price} Rs`);

    // Optionally, update the UI or perform other actions related to cart management
    console.log('Updated shopping cart:', shoppingCart);
}