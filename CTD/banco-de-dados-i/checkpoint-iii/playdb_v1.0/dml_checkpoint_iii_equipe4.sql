USE PLAYDB;

INSERT INTO PAISES(NOME, REGIAO)
VALUES 
	("Brasil", "América do Sul"),
	("Argentina", "América do Sul"),
	("França", "Europa"),
	("Estados Unidos", "América do Norte"),
	("Paraguai", "América do Sul"),
	("Colômbia", "América do Sul"),
	("Peru", "América do Sul"),
	("Portugal", "Europa"),
	("Espanha", "Europa"),
	("Chile", "América do Sul");
        
INSERT INTO ENDERECOS(ID_PAIS, LOGRADOURO, COMPLEMENTO, BAIRRO, CIDADE, ESTADO, CEP)
VALUES 
	(1,"Rua Carlos Wagner","1434","Aviação","Venâncio Aires","RS","95800-000"),
	(3,"Rua Champs-Élysées","7777","","Paris","","75007"),
    (1,"Avenida Borges de Medeiros","999","Centro Histórico","Porto Alegre","RS","90020-025"),
    (4,"Fifth Avenue","1212","","Nova Iorque","","10011"),
    (2,"Avenida de Mayo","6464","","Buenos Aires","","55845-000"),
    (1,"Rua Frederico Moura","7575","Cidade Nova","Franca","SP","14401150"),
    (1,"Avenida Rio Branco","2424","Centro","Rio de Janeiro","RJ","20040002"),
    (1,"Rua Domingos Olímpio","1111","Centro","Sobral","CE","62011140"),
    (1,"Rua dos Carijós","3487","Centro","Belo Horizonte","MG","30120060"),
    (1,"Rodovia Raposo Tavares","47543","Lageadinho","Cotia","SP","06709015"),
    (1, "Rua 1", "13", "Campo Belo", "Campinas", "SP", "13300301"),
    (1, "Rua Peixoto", "45", "Campo Belo", "Valihos", "SP", "35891243"),
	(1, "Rua Alvares Machado", "127", "Casa Verde", "São Paulo", "SP", "15865412"),
	(1, "Avenida das Nações", "1231", "Portão", "Salvador", "BA", "32198745"),
	(1, "Travessa Paulo Coelho", "25", "Alves Branco", "Mariana", "MG", "15986532"),
	(1, "Rua Parassununga", "32", "Centro", "Pardinho", "SC", "78921377"),
	(1, "Rua Barão de Mauá", "15", "Vila Brasilia", "Cuiabá", "MT", "55900378"),
	(1, "Rua Michel Teló", "265", "Matão", "Sumaré", "SP", "13200185"),
	(1, "Avenida Bolsolula", "723", "Jardim Paulista", "São Paulo", "SP", "00458678"),
	(1, "Rua dos Moleques", "280", "Campo Belo", "São Paulo", "SP", "00589987");
    
INSERT INTO CLIENTES(ID_ENDERECO, NOME, SOBRENOME, CPF,  SEXO, EMAIL, TELEFONE, DATA_NASCIMENTO)
VALUES
	(1, "Darlei","Feix","029.029.029-29","M","darleifeix97@gmail.com","993423747","1997-05-30"),
	(2, "José","Oliveira","135.285.617-42","M","josekaiqueoliveira@gmnail.com","(83) 2745-0619","1945-06-04"),
    (3, "Larissa","Ribeiro","901.749.964-89","F","larissa.raimunda.ribeiro@demetriushairstudio.com.br","(81) 3550-8251","1992-06-03"),
    (5, "Benício","Assunção","340.609.860-62","M","beniciobeneditoassuncao@quimicaindaiatuba.com.br","(98) 99923-5660","1990-01-09"),
    (4, "Paula","Fora","909.140.282-27","F","paulinhazinha@yahoo.com.br","(27) 99450-4727","2000-04-24"),
	(11, "Nathan","Oliveira","646.865.951-50","M","nathan_giovanni_oliveira@leiloes.com.br","(79) 98449-4899","1992-05-13"),
	(12, "Felipe","Viana","631.753.945-66","M","felipe_iago_viana@sociedade.com.br","(85) 99380-7729","2003-07-13"),
	(13, "Breno","Lopes","479.535.853-24","M","brenoisaaclopes@ruilacos.com.br","(65) 98865-8418","1970-01-13"),
	(14, "Evelyn","Nascimento","262.806.947-47","F","evelyn_carla_nascimento@tglaw.com.br","(77) 98317-3179","1987-04-25"),
    (15, "Tatiane","Carvalho","209.032.162-80","F","tatiane-carvalho78@origamieventos.com.br","(69) 99734-8099","1999-06-24"),
    (16, "Fábio","Gonçalves","202.815.705-40","M","fabio-goncalves90@googlemail.com","(84) 99519-1805","1997-06-09"),
    (17, "Cauã","Gomes","076.976.930-62","M","caua-gomes89@fernandaleal.com.br","(98) 99754-6684","1990-02-18"),
    (18, "Melissa","Novaes","681.730.505-54","F","melissa_novaes@unink.com.br","(83) 99440-9020","1995-01-02");
    
INSERT INTO FORMAS_PAGAMENTO(NOME)
VALUES
	("Crédito"),
	("Pix"),
    ("Boleto"),
    ("Cheque"),
    ("Débito"),
    ("Espécie"),
    ("Criptomoeda"),
    ("Permuta"),
    ("Depósito Bancário"),
    ("Ordem de Pagamento");
    
INSERT INTO FORNECEDORES(NOME, ID_PAIS)
VALUES
	("Eletronic Arts", 1),
	("Ubisoft", 2),
    ("Microsoft", 3),
    ("Rockstar Games", 4),
    ("Sony", 5),
    ("Nintendo", 5),
    ("Epic Games", 7),
    ("Capcom", 10),
    ("Valve Corporation", 8),
    ("Konami", 9);
   
INSERT INTO PLATAFORMAS(NOME)
VALUES
	("Playstation 3"),
    ("Playstation 4"),
    ("Playstation 5"),
    ("Xbox 360"),
    ("Xbox One"),
    ("Xbox Series X"),
    ("PC"),
    ("Nintendo Wii"),
    ("Nintendo Switch"),
    ("Nintendo 3DS");
    
INSERT INTO GENEROS(NOME, DESCRICAO)
VALUES
	("Esportes", NULL),
	("Ação", NULL),
    ("Aventura", NULL),
    ("Multijogador local", NULL),
    ("Multijogador Online", NULL),
    ("Console", NULL),
    ("RPG", NULL),
    ("Terror", NULL),
    ("Simulação", NULL),
    ("Estratégia", NULL);

INSERT INTO PRODUTOS(ID_FORNECEDOR, ID_PLATAFORMA, NOME, DATA_LANCAMENTO, PRECO_COMPRA, PRECO_VENDA, CLASSIFICACAO, DESCRICAO, ESTOQUE)
VALUES 
	(1,7,"FIFA 22","2021-09-27",49.90,99.90,"Livre","FIFA 22 é o novo jogo da renomada franquia de futebol, utilizando a tecnologia HyperMotion de última geração, que integra dados avançados de movimento de equipe e aprendizado de máquina para melhorar a jogabilidade.", 14),
	(1, 3,"FIFA 22","2021-09-27",49.90,99.90,"Livre","FIFA 22 é o novo jogo da renomada franquia de futebol, utilizando a tecnologia HyperMotion de última geração, que integra dados avançados de movimento de equipe e aprendizado de máquina para melhorar a jogabilidade.", 2),
    (2,6,"Assassins Creed: Valhalla","2020-11-10",65.45,149.90,"18+","Assassin's Creed Valhalla se ambienta no passado histórico do século IX.", 8),
    (4, 2,"Grand Thefht Auto V","2013-09-17",35,79.90,"18+","O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos.", 22),
    (5,3,"Console Playstation 5","2020-01-01",2800,4199.00,"Livre","O aparelho também traz retrocompatibilidade para a maioria dos jogos do PS4 e integração com o PlayStation VR.", 15),
	(5,2,"Console Playstation 4","2017-01-01",2300,3399.00,"Livre","O aparelho também traz retrocompatibilidade para a maioria dos jogos do PS3 e integração com o PlayStation VR.", 10),
	(5,1,"Console Playstation 3","2010-01-01",1300,1999.00,"Livre","O aparelho também traz retrocompatibilidade para a maioria dos jogos do PS2.", 5),
    (3,4,"Console Xbox 360","2010-01-01",1300,1999.00,"Livre","O aparelho também traz retrocompatibilidade para a maioria dos jogos do Xbox.", 5),
	(3,5,"Console Xbox One","2017-01-01",2300,3999.00,"Livre","O aparelho também traz retrocompatibilidade para a maioria dos jogos do Xbox 360.", 10),
	(3,6,"Console Xbox Series X","2021-01-01",3300,4999.00,"Livre","O aparelho também traz retrocompatibilidade para a maioria dos jogos do Xbox One.", 15);
    

INSERT INTO PRODUTOS_GENEROS(ID_PRODUTO, ID_GENERO)
VALUES
	(1,1),
	(1,4),
	(1,5),
	(2,1),
	(2,4),
	(2,5),
	(3,2),
	(3,3),
	(4,2),
	(4,5),
	(5,6),
    (6,6),
    (7,6),
    (8,6),
    (9,6),
    (10,6);

INSERT INTO VENDEDORES(ID_ENDERECO, NOME, SOBRENOME, CPF, EMAIL, TELEFONE)
VALUES 
	(6, "Jorge","Anthony","246.640.381-19","jorge_anthony_souza@bom.com.br","(68) 3564-2078"),
	(7,"Carolina","Valentina","131.158.208-87","carolina_valentina_lopes@cruiser.com.br","(55) 3898-0882"),
	(8,"Calebe","Sales","639.324.402-00","calebe_martin_sales@thewishes.com.br","(91) 2836-9738"), 
    (9,"Breno","Almeida","932.267.659-06","breno-almeida75@ruizonline.com.br","(96) 3873-3840"), 
    (10,"Ricardo","Duarte","809.440.303-94","ricardo_duarte@midiasim.com.br","(65) 3662-8793");

INSERT INTO VENDAS(ID_CLIENTE, ID_PAGAMENTO, ID_VENDEDOR, DATA_VENDA, DESCONTO, PARCELAMENTO)
VALUES 
	(1,4,3,"2022-05-30",15,3),
	(4,2,2,"2022-04-14",5,1),
    (5,1,5,"2022-11-22",20,6),
    (3,1,4,"2021-09-11",15,12),
    (2,3,1,"2022-06-15",10,1),
	(1,4,3,"2022-05-30",15,3),
    (10,4,3,"2022-01-24",10,1),
    (9,4,3,"2022-02-10",12,2),
    (7,4,3,"2022-03-22",5,6),
    (7,4,3,"2022-03-15",20,3); 
    
INSERT INTO PRODUTOS_VENDAS(ID_PRODUTO,ID_VENDA,QUANTIDADE, PRECO_VENDA) 
VALUES 
	(4,6,1,100),
    (2,4,1,99.90),
    (1,1,1,99.90),
    (2,1,1,99.90),
    (3,2,1,149.90),
    (5,5,5,4199.00),
    (2,4,1,99.90),
    (3,3,1,149.90),
    (4,6,1,100.00),
    (10,7,1,5500.00),
    (6,8,1,4500.00),
    (7,9,1,3500.00),
    (8,10,1,3000.00),
    (9,10,1,5000.00);

INSERT INTO COMPRAS(ID_PAGAMENTO, DATA_COMPRA, DESCONTO, PARCELAMENTO)
VALUES
	(3, "2022-01-12", 5, 3),
    (3,"2022-02-07", 0, 1),
    (3, "2022-04-26", 15, 12),
    (3, "2022-05-16", 10, 1),
    (3, "2022-06-02", 0, 2),
	(3, "2022-04-16", 5, 1),
	(3, "2022-03-16", 10, 1),
	(3, "2022-02-16", 15, 1),
	(3, "2022-01-16", 5, 1),
	(3, "2021-12-16", 0, 1);
    
INSERT INTO PRODUTOS_COMPRAS(ID_COMPRA, ID_PRODUTO, QUANTIDADE, PRECO_COMPRA)
VALUES 
	(1, 4, 15, 14.90),
	(1, 1, 5, 59.90),
    (2, 2, 2, 59.90),
    (3, 5, 20, 3199.00),
    (4, 3, 5, 100.00),
    (5, 6, 3, 3399.00),
	(6, 7, 10, 1999.00),
	(7, 8, 5, 1999.00),
	(8, 9, 15, 3999.00),
	(9, 10, 5, 4999.00),
	(10, 3, 5, 100.00);