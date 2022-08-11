export default function themeChange() {

    document.querySelector("body").classList.toggle("body-dark");
    document.querySelector("h1").classList.toggle("h1-dark");
    document.querySelectorAll(".item").forEach(element => element.classList.toggle("item-dark"));
    document.querySelectorAll(".item").forEach(element => element.classList.toggle("item-font-color-dark"));



    // let item =  document.querySelectorAll(".item");


    // document.querySelector("body").classList.toggle("body-dark");
    // document.querySelector("body").classList.toggle("body-dark");
    // document.querySelector("body").classList.toggle("body-dark");
    // document.querySelector("body").classList.toggle("body-dark");
};