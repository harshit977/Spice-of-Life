let carts = document.querySelectorAll('.add-to-cart');
let products = [
    { id:'starters/burger', name: 'Aloo Tikki Burger', price: 2, inCart: 0 },
    { id: 'starters/chaat', name: 'Chaat', price: 2, inCart: 0 },
    { id: 'starters/fries', name: 'French Fries', price: 2, inCart: 0 },
    { id: 'starters/momos', name: 'Momos', price: 2, inCart: 0 },
    { id: 'starters/pasta', name: 'Pasta', price: 2, inCart: 0 },
    { id: 'starters/pizza', name: 'Pizza', price: 2, inCart: 0 },
    { id: 'starters/rolls', name: 'Spring Roll', price: 2, inCart: 0 },
    { id: 'starters/sdwitch', name: 'Sandwitch', price: 2, inCart: 0 },
    { id: 'main course/baati', name: 'Daal Baati', price: 2, inCart: 0 },
    { id: 'main course/chicken', name: 'Butter Chicken', price: 2, inCart: 0 },
    { id: 'main course/dahi', name: 'Dahi Vada', price: 2, inCart: 0 },
    { id: 'main course/dosa', name: 'Masala Dosa', price: 2, inCart: 0 },
    { id: 'main course/fish', name: 'Fish Curry', price: 2, inCart: 0 },
    { id: 'main course/mix_veg', name: 'Mix Veg', price: 2, inCart: 0 },
    { id: 'main course/paneer', name: 'Masala Paneer', price: 2, inCart: 0 },
    { id: 'main course/thali', name: 'Veg Thali', price: 2, inCart: 0 },
    { id: 'dessert/apple pie', name: 'Apple Pie', price: 2, inCart: 0 },
    { id: 'dessert/cake', name: 'Cake', price: 2, inCart: 0 },
    { id: 'dessert/gujiya', name: 'Gujiya', price: 2, inCart: 0 },
    { id: 'dessert/halwa', name: 'Halwa', price: 2, inCart: 0 },
    { id: 'dessert/ice_cream', name: 'Ice Cream', price: 2, inCart: 0 },
    { id: 'dessert/modak', name: 'Modak', price: 2, inCart: 0 },
    { id: 'dessert/pudding', name: 'Pudding', price: 2, inCart: 0 },
    { id: 'dessert/rasmalai', name: 'Rasmalai', price: 2, inCart: 0 }
]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }
}
function onpagel() {
    let number = localStorage.getItem('cartNumbers');
    number = parseInt(number);
    if (number) {
        document.querySelector('.cart span').textContent = number;
    }
    else {
        document.querySelector('.cart span').textContent = 0;
    }
}
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    let productContainer = document.querySelector(".products");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product">
                    <img src="${item.id}.jpg">
                    <span>${item.name}</span>
                </div>
                <div class="price"><span>${item.price}</span></div>
                <div class="quantity">
                    <span>${item.inCart}</span>
                </div>
                <div class="total">
                    $${item.inCart * item.price}.00
                </div>
             `;
        });
        productContainer.innerHTML += `
                <!--<div class="product">
                    <h4 class="basketTotalFile">
                        Basket Total
                    </h4>
                    <h4 class="basketTotal">
                        $${cartCost}.00
                    </h4>
                </div>
                <div class="order">
                    <button class="purchase" onclick="itemdelete()">PLACE ORDER</button>
                </div>-->
                <div class="order">
                    <h4>Cart Total</h4>
                    <h4>$${cartCost}.00</h4>
                    <button class="purchase" onclick="itemdelete()">PLACE ORDER</button>
                </div>

            
        `;
    }
} 
function mainpagel()
{
    let number = localStorage.getItem('cartNumbers');
    number = parseInt(number);
    if (number) {
        document.querySelector('.cartnum').textContent = number;
    }
    else {
        document.querySelector('.cartnum').textContent = "0";
    }
}   
function itemdelete(name)
{
    alert("Your order hass been placed successfully.");
    localStorage.clear();
    location.reload();
}    
