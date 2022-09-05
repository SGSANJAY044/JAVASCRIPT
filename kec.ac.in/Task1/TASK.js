
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navitems")
var vd=document.getElementById("head")
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    vd.src="logo2.jpg";
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    navbar.style.background="transparent !important";
  }
}
