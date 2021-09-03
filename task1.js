var container = document.querySelector(".container");

container.style.background = "green";
container.style.width = "660px";
container.style.height = "660px";
container.style.paddingLeft = "60px";
container.style.paddingBottom = "60px";
container.style.margin = "0 auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";

function init() {
    var cell = document.createElement("div");
    cell.className = "cell";
    container.append(cell);
    cell.style.width = "60px";
    cell.style.height = "60px";
    cell.style.fontSize = "40px";
    cell.style.textAlign = "center";
}

window.onload = init();

for (var n = 0; n != 121; n++) {
    window.onload = init();
};


var masCell = document.querySelectorAll(".cell");
for (var i = 0; (i < masCell.length); i++) {
    var color;
    if (i % 2 == 0) {
        color = "black";
    } else {
        color = "white";
    }
    masCell[i].style.background = color;


    for (var f = 0; f <= 21; f++) {
        masCell[f].style.background = "green";
    }
    for (var f = 110; f <= 121; f++) {
        masCell[f].style.background = "green";
    }

    for (var f = 22; f <= 99; f += 11) {
        masCell[f].style.background = "green";
    }

    for (var f = 31; f <= 108; f += 11) {
        masCell[f].style.background = "green";
    }

    for (var f = 32; f <= 109; f += 11) {
        masCell[f].style.background = "green";
    }

    masCell[12].innerText = "A";
    masCell[13].innerText = "B";
    masCell[14].innerText = "C";
    masCell[15].innerText = "D";
    masCell[16].innerText = "E";
    masCell[17].innerText = "F";
    masCell[18].innerText = "G";
    masCell[19].innerText = "H";
    masCell[111].innerText = "A";
    masCell[112].innerText = "B";
    masCell[113].innerText = "C";
    masCell[114].innerText = "D";
    masCell[115].innerText = "E";
    masCell[116].innerText = "F";
    masCell[117].innerText = "G";
    masCell[118].innerText = "H";

    masCell[22].innerText = "1";
    masCell[33].innerText = "2";
    masCell[44].innerText = "3";
    masCell[55].innerText = "4";
    masCell[66].innerText = "5";
    masCell[77].innerText = "6";
    masCell[88].innerText = "7";
    masCell[99].innerText = "8";
    masCell[31].innerText = "1";
    masCell[42].innerText = "2";
    masCell[53].innerText = "3";
    masCell[64].innerText = "4";
    masCell[75].innerText = "5";
    masCell[86].innerText = "6";
    masCell[97].innerText = "7";
    masCell[108].innerText = "8";
}