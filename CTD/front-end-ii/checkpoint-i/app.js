function Pessoa (nome, email, tel) {
    this.nome = nome;
    this.email = email;
    this.tel = tel;
}

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
                `;

            card.classList.add("card")

            cardContainer.appendChild(card)
        });
    }
})

function formStore () {
    let stored = JSON.parse(localStorage.getItem("item")) != null ? JSON.parse(localStorage.getItem("item")) : [];

    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;

    stored.push(new Pessoa(nome, email, tel));

    localStorage.setItem("item", JSON.stringify(stored));
};
