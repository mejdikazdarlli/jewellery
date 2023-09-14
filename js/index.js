function _(elm){return document.getElementById(elm)}
window.addEventListener("scroll",function(){
  let nav = document.querySelector(".custom-header-jewel");
  let logobottom = document.querySelector(".custom-logo-desktop-bottom");
  nav.classList.toggle("sticky",window.scrollY > 500)
  // if (window.scrollY > 500) {
  //   logobottom.src = "jewel/pictures/logo-jewel-bottom-black.png";
  // } else if (window.scrollY < 200) {
  //   logobottom.src = "jewel/pictures/logo-jewel-bottom.png";
  // }
})


var slideIndex = 1;
showDivs(slideIndex);
window.plusDivs = (n) => { showDivs(slideIndex += n);}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const bar1 = document.querySelector(".bar1");
  const bar2 = document.querySelector(".bar2");
  const bar3 = document.querySelector(".bar3");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
    bar1.classList.toggle("openbarTop");
    bar2.classList.toggle("openbarMidlle");
    bar3.classList.toggle("openbarBottom");
  });
});