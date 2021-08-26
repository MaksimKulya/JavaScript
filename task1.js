// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

document.write("<br> ----------------------------------------------------------------- <br>")

let n = 100;

let i = 0;
while (i <= n) {
    let check = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            check = false;
            break;
        }
    }
    if (check) document.write(i + "<br>");
    i++;
}

