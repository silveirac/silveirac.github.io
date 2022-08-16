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


// Selecionar card através do titulo e trocar imagem
function imgChange() {
    let myArray = Array.from(document.querySelectorAll(".item"));
    let busca = prompt("Escolha seu animal:");
    if (isNaN(busca)) {
        let indice = myArray.findIndex(element => element.children[1].innerText == busca);
        if (indice != -1) {
            let newURL = prompt("Insira o endereço da nova imagem:\n");
            myArray[indice].children[0].setAttribute("src", newURL);
        } else {
            alert('Este animal não existe ou não está listado.\n\nO valor inserido deve ser o título completo do animal.\nex.: "O tigre"');
        }
    } else {
        alert('O valor inserido deve ser o título completo do animal.\nex.: "O tigre"')
    }
}


let imgToggler = document.getElementById("imgToggler");
imgToggler.addEventListener("click", imgChange)