var background = ["url(img/background1.jpg)", "url(img/background2.jpg)", "url(img/background3.jpg)"];

var bLen = background.length;
var i = bLen;

function changeBackground() {
    i++;
    document.getElementById("background").style.backgroundImage = background[i % bLen];
}

setInterval(changeBackground, 3000);
