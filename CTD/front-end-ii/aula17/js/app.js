function randomUser () {
    
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            let user = data.results[0];
            renderizarDadosUsuario(user);
        });
    
    function renderizarDadosUsuario(dados) {
        let  card = document.querySelector(".card");
        card.innerHTML = `
            <img src="${dados.picture.medium}">
            <h2>${dados.name.title} ${dados.name.first} ${dados.name.last}</h2>
            <p>${dados.email}</p>
        `;        
    }

}

document.querySelector("#random").addEventListener("click", randomUser)