import themeChange from "./modules/darkTheme.js";
import animals from "./modules/cardData.js"

/* Dark Theme | Light theme */

let themeToggler = document.getElementById("themeToggler");
console.log(themeToggler);

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