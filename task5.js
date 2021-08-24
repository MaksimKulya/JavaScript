// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function add(x, y) {
    return (x + y);
}

function sub(x, y) {
    return (x - y);
}

function mult(x, y) {
    return (x * y);
}

function div(x, y) {
    if (y === 0) {
        return 'Division by zero';
    } else {
        return (x / y).toFixed(3);
    }
}

res1 = add(1, 2)
document.write('Сумма = ' + res1 + '\n')

res2 = sub(3, 4)
document.write('Разность = ' + res2 + '\n')

res3 = mult(4, 5)
document.write('Умножение = ' + res3 + '\n')

res4 = div(7, 8)
document.write('Деление = ' + res4 + '\n')