function _(elm){return document.getElementById(elm)}
// window.addEventListener("scroll",function(){
//     var nav = document.querySelector("custom-header-jewel");
//     if(window.scrollY > 0){console.log(nav)}
//   //nav.classList.toggle("sticky",window.scrollY > 0)
// })

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    console.log("hereeeeeeeeeeeeeee")
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("custom-header-jewel").style.top = "0";
  } else {
    document.querySelector("custom-header-jewel").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}