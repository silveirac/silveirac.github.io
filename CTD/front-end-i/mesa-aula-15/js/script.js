function labelHidding(id) {
    let x = document.getElementById(id);

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}