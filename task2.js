const catalog = document.querySelector('#catalog');

let shopCart = []

function Item(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity
}

shopCart.push(
    new Item('apple', 95, 2),
    new Item('orange', 17, 5),
    new Item('tomato', 15, 6),
    new Item('banana', 32, 1)
);

// вывод корзины
if (shopCart == 0) {
    catalog.insertAdjacentHTML('beforeend', `<div class="prod_item total">Корзина пуста</div>`);
} else {
    for (it of shopCart) {
        catalog.insertAdjacentHTML('beforeend',

            `<div class="prod_item">

                <div class="item">
                    <div class="product"><h4>${it.product}</h4>
                        <div class="price">Цена: 
                            <span>${it.price}</span>
                        </div>
                        <div class="quantity">Количество: 
                            <span>${it.quantity}</span>
                        </div>
                    </div>
                </div>

                <div class="sale">
                    <a href="#">В корзину </a>
                </div>
            
            </div>`);
        catalog.insertAdjacentHTML('beforeend', `<hr>`)
    };
}

// количество товаров
function finalChart(shopCart) {
    return shopCart.reduce(function (acc, shopCart) {
        return acc + shopCart.quantity
    }, 0)
};

// итоговая сумма
function finalCost(shopCart) {
    return shopCart.reduce(function (acc, shopCart) {
        return acc + (shopCart.price * shopCart.quantity)
    }, 0)
};

// итоговое количество и сумма
if (shopCart != 0) {
    const totalPrice = catalog.insertAdjacentHTML('beforeend',
        `<div class="prod_item total">В корзине: ${finalChart(shopCart)} товаров на сумму 
    ${finalCost(shopCart)} руб.</div>`);
}