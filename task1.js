// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var max = 999;
number = Math.round(Math.random() * max)

var digit = {
    units: 0,
    tens: 0,
    hundreds: 0,
};

document.write("Number: " + number + "<br>");

if (0 < number && number < 1000) {
    digit.units = Math.floor(number % 10);
    digit.tens = Math.floor(number / 10 % 10);
    digit.hundreds = Math.floor(number / 100 % 10);
}
else {
    document.write('Вы ввели число за диапазоном 0 - 999 <br>');
}

document.write("Units: " + digit.units + "<br>");
document.write("Tens: " + digit.tens + "<br>");
document.write("Hundreds: " + digit.hundreds + "<br>");

document.write("<br>");