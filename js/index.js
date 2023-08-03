function _(elm){return document.getElementById(elm)}
window.addEventListener("scroll",function(){
  let nav = document.querySelector(".custom-header-jewel");
  let logobottom = document.querySelector(".custom-logo-desktop-bottom");
  nav.classList.toggle("sticky",window.scrollY > 500)
  if (window.scrollY > 500) {
    logobottom.src = "jewel/pictures/logo-jewel-bottom-black.png";
  } else if (window.scrollY < 200) {
    logobottom.src = "jewel/pictures/logo-jewel-bottom.png";
  }
})

