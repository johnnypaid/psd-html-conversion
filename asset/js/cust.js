var myNav = document.getElementById("nav");
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    myNav.classList.add("scroll");
    mybutton.style.display = "block";
  } else {
    myNav.classList.remove("scroll");
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}