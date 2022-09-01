alert("**ATENÇÃO!**\n\nPara habilitar o formulário de cadastro de produtos, faça o login utilizando:\n\nlogin: kimjongun\nsenha: 123456 ")

// verificar login
localStorage.setItem("login", '{"login" : "kimjongun", "password" : "123456"}');

document.querySelector("#login-button").addEventListener("click", function () {

    let storedLogin = JSON.parse(localStorage.getItem("login"));
    let login = document.getElementById("login-input").value;
    let password = document.getElementById("password-input").value;
    let greetings = document.getElementById("greetings");

    if (login == storedLogin.login && password == storedLogin.password) {
        greetings.style.display = "flex";
        alert("Login realizado!");
    } else {
        greetings.style.display = "none";
        alert("Login ou senha incorreta!");
    }
});

// toggle slide menu
function slideMenu () {

    let menu = document.querySelector("#header-menu");
    let topbar = document.querySelector("#bar1");
    let midbar = document.querySelector("#bar2");
    let lowbar = document.querySelector("#bar3");

    if (menu.hasAttribute("hidden")) {
        topbar.classList.add("bar-top");
        midbar.classList.add("bar-middle");
        lowbar.classList.add("bar-bottom");
        menu.removeAttribute("hidden");
    } else {
        topbar.classList.remove("bar-top");
        midbar.classList.remove("bar-middle");
        lowbar.classList.remove("bar-bottom");
        menu.setAttribute("hidden", true);
    }
}

// função construtora para o objeto a ser salvo
function Card (imgUrl, cardTitle, cardPrice, cardPayPlan, cardDescription) {
    this.imgUrl = imgUrl;
    this.cardTitle = cardTitle;
    this.cardPrice = cardPrice;
    this.cardPayPlan = cardPayPlan;
    this.cardDescription = cardDescription;
}

// Função criadora de cards

function cardCreation (imgUrl, cardTitle, cardPrice, cardPayPlan, cardDescription) {
    let cardContainer = document.getElementById("card-container");
            let card = document.createElement("a");
            
            card.innerHTML = `
                    <div class="card-img-container">
                        <img src="${imgUrl}" class="card-img">
                    </div>
                    <div class="card-description-container">
                        <p class="card-title">${cardTitle}</p>
                        <div class="card-description-price-container">
                            <h2 class="card-price">${cardPrice}</h2>
                            <p class="card-payplan">${cardPayPlan}</p>
                            <p class="card-description">${cardDescription}</p>
                            </div>
                    </div>
                `;

            card.classList.add("card")

            cardContainer.appendChild(card)
}

// Carrega os cards de acordo com o conteudo no localStorage
window.addEventListener("load", () => {
    let stored = JSON.parse(localStorage.getItem("item")) != null ? JSON.parse(localStorage.getItem("item")) : [];
    
    if (stored != null) {
        stored.forEach(element => cardCreation(element.imgUrl, element.cardTitle, element.cardPrice, element.cardPayPlan, element.cardDescription));
    }
});

// Grava os cards no localStorage
document.getElementById("save-button").addEventListener("click", formStore);

function formStore () {
    let stored = JSON.parse(localStorage.getItem("item")) != null ? JSON.parse(localStorage.getItem("item")) : [];

    let imgurl = document.getElementById("product-imgurl").value;
    let title = document.getElementById("product-title").value;
    let price = document.getElementById("product-price").value;
    let payplan = document.getElementById("product-payplan").value;
    let description = document.getElementById("product-description").value;

    
    stored.push(new Card(imgurl, title, price, payplan, description));
    localStorage.setItem("item", JSON.stringify(stored));

    cardCreation(imgurl, title, price, payplan, description)
    document.getElementById("product-imgurl").value = "";
    document.getElementById("product-title").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-payplan").value = "";
    document.getElementById("product-description").value = "";

    alert("Produto inserido com sucesso!")
};