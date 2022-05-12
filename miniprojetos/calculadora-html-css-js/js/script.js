let isOp = false;
let tempNum = "";
let tempOp = "";

function insert(num) {
    if (document.getElementById('num-screen').innerHTML === "") {
        document.getElementById('num-screen').innerHTML = Number(num);
    } 
    else {
        
        if (isOp === true) {
            clean();
            document.getElementById('num-screen').innerHTML = Number(document.getElementById('num-screen').innerHTML + num + "")
            isOp = false;
        } 
        else {
            document.getElementById('num-screen').innerHTML = Number(document.getElementById('num-screen').innerHTML + num + "");
        }
    }
}

function clean() {
    if (document.getElementById('num-screen').innerHTML === "") {
        document.getElementById('expression-screen').innerHTML = "";
    }
    document.getElementById('num-screen').innerHTML = "";
}

function operation(op) {
    if (document.getElementById('num-screen').innerHTML === "") {

    }
    else {
        tempNum += Number(document.getElementById('num-screen').innerHTML) + " " + op + " ";
        
        if (tempNum === "") {
            isOp = true;
        } 
        else {
            document.getElementById('expression-screen').innerHTML = String(tempNum);
            isOp = true;
        }
    }

    console.log(tempNum);
}

function result(equalTo) {
    tempNum += document.getElementById('num-screen').innerHTML + " " + equalTo + " ";
    document.getElementById('expression-screen').innerHTML = String(tempNum)
    console.log(tempNum)
    isOp = true;
}