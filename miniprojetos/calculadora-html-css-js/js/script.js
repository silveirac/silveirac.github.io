//Capturando e alterando o valor de #num-screen
let numScreen = document.querySelector("#num-screen");
let expScreen = document.querySelector("#expression-screen")
let toggleResult = false;

console.log(expScreen.innerText);

//função para inserir valores na #num-screen
function insert (num) {
    if (numScreen.innerText.length == 22) {
        alert("Número muito longo!")
    } else {
        if (numScreen.innerText == "0") {
            numScreen.innerText = num;
        } else {
            numScreen.innerText += num;        
        }
    }
}

function insertDot() {
    if (numScreen.innerText.indexOf(".") == -1) {
        numScreen.innerText += ".";   
    }
}

function clean() {
    if (numScreen.innerText == null || numScreen.innerText == "0") {
        expScreen.innerText = "";
        numScreen.innerText = "0";
    } else {
        numScreen.innerText = "0";
    }
}

function operation(operator) {
    let arrayExp = expScreen.innerText.split("");
    if (operator == "=" && toggleResult == false) {
        expScreen.innerText += " "+numScreen.innerText;
        let result = eval(expScreen.innerText);
        numScreen.innerText = "0"
        expScreen.innerText = result;
        toggleResult = true;
    } else if (operator !== "=") {
        if (expScreen.innerText == "") {
            expScreen.innerText += numScreen.innerText;
            expScreen.innerText += " "+operator;
            numScreen.innerText = "0"
            toggleResult = false;
        } else if (expScreen.innerText !== "" && ["+", "-", "*", "/"].includes(arrayExp[arrayExp.length-1]) == true) {
            expScreen.innerText += " "+numScreen.innerText;
            expScreen.innerText += " "+operator;
            numScreen.innerText = "0"
            toggleResult = false;
        } else if (expScreen.innerText !== "" && ["+", "-", "*", "/"].includes(arrayExp[arrayExp.length-1]) == false) {
            expScreen.innerText += " "+operator;
            expScreen.innerText += " "+numScreen.innerText;
            numScreen.innerText = "0"
            toggleResult = false;
        }
    }
}