window.addEventListener("load", function () {
  addRequiredClasses();
});

function addRequiredClasses() {
  if (window.innerWidth < 860) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}

let hamburger = document.querySelector(".hamburger");  // spelling fixed
let mobileNav = document.querySelector(".nav-wrapper"); // nav changes to nav-list

let bars = document.querySelectorAll(".hamburger span");

let isActive = false;

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("open"); 
  if (!isActive) {
    bars[0].style.transform = "rotate(45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-45deg)";
    isActive = true;
  } else {
    bars[0].style.transform = "rotate(0deg)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotate(0deg)";
    isActive = false;
  }
});