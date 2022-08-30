// função construtora para o objeto a ser salvo
function Pessoa (nome, email, tel) {
    this.nome = nome;
    this.email = email;
    this.tel = tel;
}

// Carrega os cards de acordo com o conteudo no localStorage
window.addEventListener("load", () => {
    let stored = JSON.parse(localStorage.getItem("item")) != null ? JSON.parse(localStorage.getItem("item")) : [];
    
    if (stored != null) {
        stored.forEach(element => {
            let cardContainer = document.getElementById("card-container");
            let card = document.createElement("div");
            
            card.innerHTML = `
                <h2>${element.nome}</h2>
                <p><strong>E-mail:</strong> ${element.email}</p>
                <p><strong>Telefone:</strong> ${element.tel}</p>
                <a href="javascript:void(0)" class="excButton">Excluir</a>
                `;

            card.classList.add("card")

            cardContainer.appendChild(card)
        });
    }
});

// Grava os cards no localStorage
function formStore () {
    let stored = JSON.parse(localStorage.getItem("item")) != null ? JSON.parse(localStorage.getItem("item")) : [];

    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;

    stored.push(new Pessoa(nome, email, tel));

    localStorage.setItem("item", JSON.stringify(stored));
};

// Observando evento de click nos botões de exclusão.
window.addEventListener("load", () => {
    let arrayOfButtons = Array.from(document.getElementsByClassName("excButton"));  

    arrayOfButtons.forEach(element => {
        element.addEventListener("click", evento => console.log(evento.target))
    })
})


// Exclui cards
// function teste() {
    
//     console.log(document.getElementsByClassName("card"))
// }