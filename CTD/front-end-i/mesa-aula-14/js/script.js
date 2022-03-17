function togleMobileMenu(id) {
  var x = document.getElementById(id);
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}