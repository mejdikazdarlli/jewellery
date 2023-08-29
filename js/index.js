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

