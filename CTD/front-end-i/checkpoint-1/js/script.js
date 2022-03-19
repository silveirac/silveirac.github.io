function togleMobileMenu(id) {
    let x = document.getElementById(id);
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  function togleSlidingContent(id1, id2) {
    let x = document.getElementById(id1);
    let y = document.getElementById(id2);
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "flex";
    }
  }