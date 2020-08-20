let css = document.querySelector("h3");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.getElementById("gradient");

css.textContent = body.style.background;

function updateBackground() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";

  css.textContent = body.style.background;
}

color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
