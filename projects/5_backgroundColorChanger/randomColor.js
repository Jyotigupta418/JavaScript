let randomColors = function () {
const hex = "0123456789ABCDEF";
let Color = "#";
  for (i = 0; i < 6; i++) {
      Color += hex[Math.floor(Math.random() * 16)];
  }
  return Color;
  };
let invalid;
const startChanging = function () {
  if (!invalid) {
    invalid = setInterval(changeBgColor, 500);
  }

function changeBgColor() {
    document.body.style.backgroundColor = randomColors();
    document.querySelector('h4').innerHTML = randomColors();
}
};

const stopChanging = function () {
  clearInterval(invalid);
  document.body.style.backgroundColor = '#fff'
  invalid = null;
};

document.querySelector("#start").addEventListener("click", startChanging);
document.querySelector("#stop").addEventListener("click", stopChanging);
