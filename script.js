const color = ["white", "red", "blue", "rgb(100,200,200)", "#DDC"];

var colorText = document.querySelector('.color');
var btn = document.querySelector('.btn');
btn.addEventListener("click", function changeBackgroundColor() {
    colorText.textContent = color[random];
    document.body.style.backgroundColor = color[random];
    var random = randomNumber();
    colorText.textContent = color[random];
    document.body.style.backgroundColor = color[random];
});

function randomNumber() {
    return Math.floor(Math.random() * color.length);
}