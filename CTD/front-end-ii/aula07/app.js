import themeChange from "./modules/darkTheme.js";
import animals from "./modules/cardData.js"

/* Dark Theme | Light theme */

let themeToggler = document.getElementById("themeToggler");

themeToggler.addEventListener("click", themeChange)

/* HTML aplicado através de javascript */

function cardCreation(title, description, imgUrl) {

    let cardContainer = document.getElementById("card-container");
    let card = document.createElement("div");

    card.innerHTML = `
            <img src="${imgUrl}">
            <h2>${title}</h2>
            <p>${description}</p>
    `;

    cardContainer.appendChild(card);
    card.classList.add("item");

};

animals.map(element => cardCreation(element.title, element.description, element.imgUrl));


let busca = prompt("Busque seu animal:\n")

let myArray = Array.from(document.querySelectorAll(".item"))

myArray.map(element => {
    if (element.children[1].innerText == busca) {
        let indice = index;
        console.log(indice);
        // prompt("Digite a nova URL da imagem:");
    }
})



