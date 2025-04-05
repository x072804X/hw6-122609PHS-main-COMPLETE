
// APPLE_COST, BANANA_COST, COCONUT_COST, cart, and transactions
// are the only global variables that you are allowed to have!

const APPLE_COST = 0.50;
const BANANA_COST = 0.25;
const COCONUT_COST = 2.00;

let cart = {
    apple: 0,
    banana: 0,
    coconut: 0
}

let transactions = [];

/**
 * This functon is called whenever the "Add to Cart!" button is clicked.
 * It should first check if the amount, retrieved via `getAmount`, is a positive number.
 * If it is not, notify the user "Please enter a positive number for an amount."
 * via the `amn-error-text`. Otherwise, reset any add amount error text that may exist
 * and update the corresponding number of apples, bananas, or coconuts (based on
 * what was selected) in the cart.
 */
function addToCart() { 
    const amn = getAmount();
    const item = document.getElementById('add-item').value;
    updateCart()
     if (amn <= 0|| amn == '') {
    alert("Please enter a positive number for an amount")
    } else if (item == 'apple') {
    cart.apple += amn;
    updateCart()
    } else if (item == 'banana') {
    cart.banana += amn;
    updateCart()
    }  else if (item == 'coconut') {
    cart.coconut += amn; 
    updateCart()
    }  else {   
    updateCart()
}
}

/**
 * This functon is called whenever the "Checkout" button is clicked.
 * It should first check if the cart is empty; if it is, notify the
 * user that "You must have something in your cart to checkout!"
 * via the `checkout-error-text`. Otherwise, reset any checkout error text that may exist,
 * add the transaction to the ongoing list, reset the cart to 0 apples, bananas, and coconuts,
 * and alert the user that "Checkout complete! Thank you for your purchase.".
 */
function checkout() {  
 if (cart == ''|| cart == 0) {
    alert("You must have something in your cart to checkout")
 } else {
    alert("Checkout complete! Thank you for your purchase!")
    resetCart()

}
}
/**
 * This functon is called whenever the "Reset Cart" button is clicked.
 * It should reset the cart to 0 apples, bananas, and coconuts as well
 * as clear any error text for "add" or "checkout".
 */
function resetCart() {
    cart.apple = 0
    cart.banana = 0
    cart.coconut = 0
    updateCart()
}

/**
 * This function is called whenever the "Log Transactions" button is clicked.
 * It should simply console.log the transactions list and alert the
 * user that it has done so saying "Check your console to see the list of transactions!"
 */
function logTransactions() {
console.log(cart)
alert("Check your console to see the list of transactions!")
}

/**
 * This function is completed for you. You can use it as you wish!
 * Updates the text of elements in "Cart Status" based upon the values
 * in the global value "cart".
 */
function updateCart() {
    document.getElementById("shopping-cart-item-apple").innerText = `${cart.apple} apple @ $${APPLE_COST.toFixed(2)}/each`;
    document.getElementById("shopping-cart-item-banana").innerText = `${cart.banana} banana @ $${BANANA_COST.toFixed(2)}/each`;
    document.getElementById("shopping-cart-item-coconut").innerText = `${cart.coconut} coconut @ $${COCONUT_COST.toFixed(2)}/each`;
    
    const total = cart.apple * APPLE_COST + cart.banana * BANANA_COST + cart.coconut * COCONUT_COST;
    document.getElementById("total").innerText = `Your total comes to $${total.toFixed(2)}`;
}

/**
 * This function is completed for you. You can use it as you wish!
 * Gets the amount as an integer if it exists, otherwise returns null
 * @returns {number || null} the amount as a number, or null if empty
 */
function getAmount() {
    const val = document.getElementById("add-amount").value;
    if (val === '') {
        return null;
    } else {
        return parseInt(val);
    }
}