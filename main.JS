let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let ahmed = document.getElementById("ahmed");

window.onscroll = function () {
  let value = window.scrollY;

  stars.style.left = value * 0.3 + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  ahmed.style.fontSize = Math.min(value, 67) + "px";

  if (value >= 67) {
    ahmed.style.position = "fixed";
  }

  if (value >= 540) {
    ahmed.style.display = "none";
  } else {
    ahmed.style.display = "block";
  }

  if (value >= 181) {
    document.querySelector(".main").style.background =
      "linear-gradient(#376281, #10001f)";
  } else {
    document.querySelector(".main").style.background =
      "linear-gradient(#200016, #10001f)";
  }
};
