// С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

document.write("<br> ----------------------------------------------------------------- <br>")

function setPrice(min, max) {
    let price = parseInt(Math.random() * (max - min) + min);
    return price;
}

let basket = [
    { product: "apple", price: setPrice(10, 100) },
    { product: "orange", price: setPrice(10, 100) },
    { product: "tomato", price: setPrice(10, 100) },
    { product: "banana", price: setPrice(10, 100) }
];

for (let prod of basket) {
    document.write("Товар " + prod.product + " стоит: " + prod.price + "<br>");
}

function countBasketPrice(basket) {
    let BasketPrice = 0;
    for (let prod of basket) {
        BasketPrice += prod.price;
    }
    return BasketPrice;
}

document.write("<br>" + "Стоимость корзины: " + countBasketPrice(basket) + "<br>");

