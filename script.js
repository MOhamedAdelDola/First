let spinner = document.querySelector(".spinner");
let navbar = document.querySelector("nav");
let page = document.querySelector(".page");
let bars = document.querySelector(".bars");
let close = document.querySelector(".close");
let caption = document.querySelectorAll(".caption");

bars.addEventListener("click", function () {
  navbar.style.transform = "translateX(0rem)";
  navbar.style.opacity = 0.8;
  bars.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  navbar.style.transform = "translateX(-20rem)";
  navbar.style.opacity = 1;
  bars.style.display = "block";
  close.style.display = "none";
});

setTimeout(function () {
  spinner.style.display = "none";
  page.style.display = "block";
}, 3000);
