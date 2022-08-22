// Declaração de variáveis
let numScreen = document.querySelector("#num-screen");
let expScreen = document.querySelector("#expression-screen")
let toggleResult = false;

console.log(expScreen.innerText);

// Função para inserir valores na #num-screen
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

// Função para inserir ponto na #num-screen
function insertDot() {
    if (numScreen.innerText.indexOf(".") == -1) {
        numScreen.innerText += ".";   
    }
}

// Função para limpar as telas (num-screen e expression-screen)
function clean() {
    if (numScreen.innerText == null || numScreen.innerText == "0") {
        expScreen.innerText = "";
        numScreen.innerText = "0";
    } else {
        numScreen.innerText = "0";
    }
}

// // Função para inserir operação
function operation(operator) {
    let arrayExp = expScreen.innerText.split("");
    let result;
    if (["+", "-", "*", "/"].includes(arrayExp[arrayExp.length-1]) == true || expScreen.innerText == "") {

        if (operator == "=") {
            expScreen.innerText += " "+numScreen.innerText;
            numScreen.innerText = "0";
            result = eval(expScreen.innerText);
            expScreen.innerText = result;
        } else {
            expScreen.innerText += " "+numScreen.innerText;
            expScreen.innerText += " "+operator;
            numScreen.innerText = "0"
        }
        
    } else {
        
        if (operator == "=") {
            result = eval(expScreen.innerText);
            expScreen.innerText = result;
        } else {
            expScreen.innerText += " "+operator;
            expScreen.innerText += " "+numScreen.innerText;
            numScreen.innerText = "0"
        }
    }
    longExpression();
}

// Função para apagar último digito da #num-screen
function del() {
    if (numScreen.innerText !== "0") {
        let num = numScreen.innerText.split("");
        num.pop();
        if (num.length == 0) {
            numScreen.innerText = "0";
        } else {
            numScreen.innerText = num.join("");
        }
    }
}

// Função verificar tamanho de caracteres na #exp-screen
function longExpression() {
    if (expScreen.innerText.length >= 50) {
        alert("Expressão muito longa!");
        expScreen.innerText = "";
    }
}

// Listeners de eventos de teclado
window.addEventListener("keydown", event => {
    console.log(event.key);
    switch (event.key) {
        default:
            break;
        case "1":
            insert("1");
            break;
        case "2":
            insert("2");
            break;
        case "3":
            insert("3");
            break;
        case "4":
            insert("4");
            break;
        case "5":
            insert("5");
            break;
        case "6":
            insert("6");
            break;
        case "7":
            insert("7");
            break;
        case "8":
            insert("8");
            break;
        case "9":
            insert("9");
            break;
        case "0":
            insert("0");
            break;
        case "+":
            operation("+");
            break;
        case "-":
            operation("-");
            break;
        case "*":
            operation("*");
            break;
        case "/":
            operation("/");
            break;
        case "Enter":
            operation("=");
            break;
        case "Backspace":
            del();
            break;
        case "Delete":
            clean();
            break;
        case ",":
            clean();
            break;
        case ".":
            insertDot();
            break;
    }
});
