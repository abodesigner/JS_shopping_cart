const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');
const cartButton = document.querySelectorAll(".store-item-icon");
const cartTotal = document.querySelector('.cart-total-container');
const clearButton = document.getElementById('clear-cart');
let total = [];
cartInfo.addEventListener("click", function () {
    cart.classList.toggle('show-cart');
});

cartButton.forEach(btn => {
    btn.addEventListener("click", function (e) {
        if (e.target.parentElement.classList.contains('store-item-icon')) {
            let fullPath = e.target.parentElement.previousElementSibling.src;
            let pos = fullPath.indexOf('img') + 3;
            let partPath = fullPath.slice(pos);

            let itemName = e.target.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent;
            let itemImage = `img-cart${partPath}`;
            let itemPrice = e.target.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.textContent;
            let finalPrice = itemPrice.slice(1).trim();
            let item = {
                name: itemName,
                img: itemImage,
                price: finalPrice
            }

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
            cartItem.innerHTML =
                `<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>`;

            cart.insertBefore(cartItem, cartTotal);
            alert('new item add successfully');
            showTotals();

        }

    });


    function showTotals() {

        const items = document.querySelectorAll('.cart-item-price');
        items.forEach(function (item) {
            total.push(parseFloat(item.textContent));
        });

        const totalMoney = total.reduce(function (accumulator, current) {
            accumulator += current;
            return accumulator;
        }, 0);

        const finalMoney = totalMoney.toFixed(2);
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('cart-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;
    }

});


// clearButton.addEventListener("click", function(){
//     total = [];
//     document.getElementById('cart').textContent = "";
//     document.getElementById('cart').textContent += "Empty Cart";

// });