var cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  updateCart();
}

function updateCart() {
  var cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  for (var i = 0; i < cartItems.length; i++) {
    var li = document.createElement('li');
    li.textContent = cartItems[i];
    cartList.appendChild(li);
  }
}

function checkout() {
  if (cartItems.length > 0) {
    alert('Thank you for your purchase!');
    cartItems = [];
    updateCart();
  } else {
    alert('Your cart is empty. Please add some items.');
  }
}
