var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}
// setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

body.style.background =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

setGradient();

var randomButton = document.createElement("button");
randomButton.textContent = "Randomize";
body.appendChild(randomButton);

function generateRandomColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function randomizeColors() {
  color1.value = generateRandomColor();
  color2.value = generateRandomColor();
  setGradient();
}

randomButton.addEventListener("click", randomizeColors);
