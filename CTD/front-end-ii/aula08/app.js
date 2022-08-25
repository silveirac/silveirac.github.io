// Impedindo que a página resete ao enviar o formulário
let form = document.querySelector("#register-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Formulário impedido de reiniciar a página.")
});

// Mostre um alerta na página quando a tela terminar de ser carregada.
window.addEventListener("load", function () {
    alert("Página completamente carregada!");
});

// Trocar cor de texto
let formTitle = document.querySelector("#form-title");
formTitle.addEventListener("mouseover", () => formTitle.classList.toggle("teal-text"));
formTitle.addEventListener("mouseout", () => formTitle.classList.toggle("teal-text"));

//Registrar teclas pressionadas e quantidade
let keyLogger = document.getElementById("key-logger-text-area");
window.addEventListener("keyup", (e) => keyLogger.innerText += `${e.key}\n`);

let keyLoggerCounter = document.getElementById("key-logger-counter");
window.addEventListener("keyup", (e) => keyLoggerCounter.innerText++);