/* Cauê Silveira | CTD (Part-time) | Turma 1 */

export default function somar() {

    let num1 = prompt("Insira o primeiro número:\n");
    
    if (!isNaN(num1)) {
        
        let num2 = prompt("Insira o segundo número:\n");

        if (!isNaN(num2)) {

                let result = parseFloat(num1) + parseFloat(num2);
                alert(`${num1} + ${num2} = ${result}`);

        } else {
            
            alert("O valor inserido deve ser um número!");
            
        }
        
    } else {
       
        alert("O valor inserido deve ser um número!");

    }

};