console.log("Start");

setTimeout(
() =>{console.log("Msge display after 3 seconds")} ,

3000
)


console.log("Stop");


//CallBack
// Function to add an item to the cart
function addItemToCart(item, checkCart) {
    console.log(`Adding ${item} to the cart...`);
    console.log(`${item} has been added to the cart.`);
    
    // After adding the item, check the cart
    checkCart();
}

// Function to check the cart after adding an item
function checkCart() {
    console.log("Checking the updated cart...");
    console.log("Cart is updated with the new item.");
}

// Add "Laptop" to the cart, then check the cart
addItemToCart("Laptop", checkCart);






//Example 2 for Call Back

// Function representing the chef cooking the food
function cookFood(order, whenReady) {
    console.log(`Chef is cooking your ${order}...`);
    
    // Simulate that the food is ready (cooking done)
    console.log(`${order} is ready!`);
    
    // Call the function to notify you that the food is ready (callback)
    whenReady();
}

// Function representing you eating the food when it's ready
function whenReady() {
    console.log("Now eating the food. Delicious!");
}

// You place an order for "Pasta", and when it's ready, you'll eat it
cookFood("Pasta", whenReady);
