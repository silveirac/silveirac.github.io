/* Cauê Silveira | CTD (Part-time) | Turma 1 */

export default function dividir() {

    let num1 = prompt("Insira o numerador:\n");
    
    if (!isNaN(num1)) {
        
        let num2 = prompt("Insira o denominador:\n");

        if (!isNaN(num2)) {
            
            if (num2 == 0) {

                alert("Não se pode dividir por zero");

            } else {

                let result = parseFloat(num1) / parseFloat(num2);
                alert(`${num1} / ${num2} = ${result}`);

            }

        } else {
            
            alert("O valor inserido deve ser um número!");
            
        }
        
    } else {
       
        alert("O valor inserido deve ser um número!");

    }

};