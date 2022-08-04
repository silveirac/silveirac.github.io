// MESA DE TRABALHO - AULA 2 - 03/08/2022 - FRONT-END II

//INTEGRANTES
// Cauê Silveira
// Dalei Feix
// Janaína Pontes
// Joelio Leão
// Jonathan Possoli
// Josi Santos
// Pablo Haleson
// Rebeca Medeiros
// Thiago Lima

function play() {
    const players = [{Name : "Jogador", Points : 0}, {Name : "CPU", Points : 0}];

    players[0].Name = prompt("Seja muito bem-vindo!\n\nInsira o seu nome de jogador:", "Jogador");

    let playerChoice = null;
    let cpuChoice = null;
    let winner = "";
    let rematch = true;

    joKenPo();

    function joKenPo() {
        
        while (players[0].Points < 3 && players[1].Points < 3) {
        
            playerChoice = parseInt(prompt("Escolha sua jogada:\n1 - Pedra\n2 - Papel\n3 - Tesoura"));
        
            if (playerChoice !== null && [1, 2, 3].includes(playerChoice)) {
                
                cpuChoice = Math.ceil(Math.random() * 3)
                let msg = "";
        
                switch (playerChoice) {
        
                    case 1: 
                        switch (cpuChoice) {
                            case 1:
                                msg = `Você escolheu: Pedra!\nCPU escolheu: Pedra!\n\nEmpate!\n\n${players[0].Name} ${players[0].Points} X ${players[1].Name} ${players[1].Points}`;
                                break;
                            case 2:
                                players[1].Points++;
                                msg = `Você escolheu: Pedra!\nCPU escolheu: Papel!\n\nCPU ganhou!\n\n${players[0].Name} ${players[0].Points} X ${players[1].Name} ${players[1].Points}`;
                                break;
                            case 3: 
                                players[0].Points++;
                                msg = `Você escolheu: Pedra!\nCPU escolheu: Tesoura!\n\nVocê ganhou!\n\n${players[0].Name} ${players[0].Points} X ${players[1].Name} ${players[1].Points}`;
                                break;
                        }
                        break;
        
                    case 2: 
                        switch (cpuChoice) {
                            case 1:
                                players[0].Points++;
                                msg = `Você escolheu: Papel!\nCPU escolheu: Pedra!\n\nVocê ganhou!\n\n${players[0].Name} ${players[0].Points} X ${players[1].Name} ${players[1].Points}`;
                                break;
                            case 2:
                                msg = `Você escolheu: Papel!\nCPU escolheu: Papel!\n\nEmpate!\n\n${players[0].Name} ${players[0].Points} X ${players[1].Name} ${players[1].Points}`;
                                break;
                            case 3: 
                                players[1].Points++;
                                msg = `Você escolheu: Papel!\nCPU escolheu: Tesoura!\n\nCPU ganhou!\n\n${players[0].Name} ${players[0].Points} X ${players[1].Name} ${players[1].Points}`;
                                break;
                        }
                        break;
        
                    case 3: 
                        switch (cpuChoice) {
                            case 1:
                                players[1].Points++;
                                msg = `Você escolheu: Tesoura!\nCPU escolheu: Pedra!\n\nCPU ganhou!\n\n${players[0].Name} ${players[0].Points} X ${players[1].Name} ${players[1].Points}`;
                                break;
                            case 2:
                                players[0].Points++;
                                msg = `Você escolheu: Tesoura!\nCPU escolheu: Pepel!\n\nVocê ganhou!\n\n${players[0].Name} ${players[0].Points} X ${players[1].Name} ${players[1].Points}`;
                                break;
                            case 3: 
                                msg = `Você escolheu: Tesoura!\nCPU escolheu: Tesoura!\n\nEmpate!\n\n${players[0].Name} ${players[0].Points} X ${players[1].Name} ${players[1].Points}`;
                                break;
                        }
                        break;
                };
        
                alert(`${msg}`);
        
            } else {
                alert("Escolha uma jogada válida!");
            };
        
        };
        
            winner = (players[0].Points > players[1].Points ? players[0].Name : players[1].Name);
            alert(`${winner} é o grande campeão!`);

            rematch = confirm("Gostaria de jogar novamente?");

            if (rematch) {
                players[0].Points = 0;
                players[1].Points = 0;
                joKenPo();
            } else {
                alert("Agradecemos por jogar!");
            }
    };
}
