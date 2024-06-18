let cart = [];
const taxRate = 0.05;
const deliveryCharge = 40;

function addToCart(dish, price) {
    const item = { dish, price };
    cart.push(item);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const taxAmountElement = document.getElementById('tax-amount');
    const finalPriceElement = document.getElementById('final-price');
    
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.dish} - ₹${item.price}`;
        totalPrice += item.price;
        cartItems.appendChild(listItem);
    });

    const taxAmount = totalPrice * taxRate;
    const finalPrice = totalPrice + taxAmount + deliveryCharge;

    totalPriceElement.textContent = totalPrice.toFixed(2);
    taxAmountElement.textContent = taxAmount.toFixed(2);
    finalPriceElement.textContent = finalPrice.toFixed(2);
}

function calculateFinalBill() {
    renderCart();
    alert(`Your final bill is ₹${document.getElementById('final-price').textContent}. Thank you for your purchase!`);
}
