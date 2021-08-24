// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "add":
            res = add(arg1, arg2);
            document.write(res)
            break;
        case "sub":
            res = sub(arg1, arg2);
            document.write(res)
            break;
        case "mult":
            res = mult(arg1, arg2);
            document.write(res)
            break;
        case "div":
            res = div(arg1, arg2);
            document.write(res)
            break;
    }
}

mathOperation(10, 5, "sub")