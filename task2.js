// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

class Basket {
    constructor(product, price) {
        this.product = product;
        this.price = price;
    }
}

let shopCart = []

shopCart.push(
    new Basket("apple", 12),
    new Basket("orange", 45),
    new Basket("banana", 15),
    new Basket("tomato", 25)
);

for (let prod of shopCart) {
    document.write("Товар " + prod.product + " стоит: " + prod.price + "<br>");
}

function countBasketPrice(shopCart) {
    return shopCart.reduce(function (acc, shopCart) {
        return acc + (shopCart.price)
    }, 0)
};

document.write("<br>" + "Стоимость корзины: " + countBasketPrice(shopCart) + "<br>")


