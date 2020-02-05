// create random numbers
let randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// create random images path
let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";

// set attribute
document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber2 === randomNumber1) {
  document.querySelector("h1").innerHTML =
    "No winners today, go and eat PIZZA!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "First player wins!";
} else {
  document.querySelector("h1").innerHTML = "Second player wins!";
}

// document.getElementById("goClick").addEventListener("click", logic);
