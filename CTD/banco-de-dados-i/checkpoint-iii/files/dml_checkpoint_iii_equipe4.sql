USE PLAYDB;

INSERT INTO PAISES(NOME, REGIAO)
VALUES 
	("Brasil", "América do Sul"),
		("Argentina", "América do Sul"),
        ("França", "Europa"),
        ("Estados Unidos", "América do Norte"),
        ("Paraguai", "América do Sul");
        
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
    (1,"Rodovia Raposo Tavares","47543","Lageadinho","Cotia","SP","06709015");
    
INSERT INTO CLIENTES(ID_ENDERECO, NOME, SOBRENOME, CPF,  SEXO, EMAIL, TELEFONE, DATA_NASCIMENTO)
VALUES
	(1, "Darlei","Feix","029.029.029-29","M","darleifeix97@gmail.com","993423747","1997-05-30"),
	(2, "José","Oliveira","135.285.617-42","M","josekaiqueoliveira@gmnail.com","(83) 2745-0619","1945-06-04"),
    (3, "Larissa","Ribeiro","901.749.964-89","F","larissa.raimunda.ribeiro@demetriushairstudio.com.br","(81) 3550-8251","1992-06-03"),
    (5, "Benício","Assunção","340.609.860-62","M","beniciobeneditoassuncao@quimicaindaiatuba.com.br","(98) 99923-5660","1990-01-09"),
    (4, "Paula","Fora","909.140.282-27","F","paulinhazinha@yahoo.com.br","(27) 99450-4727","2000-04-24");
    
INSERT INTO FORMAS_PAGAMENTO(NOME)
VALUES
	("Cartão de crédito"),
	("Pix"),
    ("Boleto"),
    ("Cheque");
    
INSERT INTO FORNECEDORES(NOME, ID_PAIS)
VALUES
	("Eletronic Arts", 1),
	("Ubisoft", 2),
    ("Microsoft", 3),
    ("Rockstar Games", 4),
    ("Sony", 5);
   
INSERT INTO PLATAFORMAS(NOME)
VALUES
	("Playstation 3"),
    ("Playstation 4"),
    ("Playstation 5"),
    ("Xbox 360"),
    ("Xbox One"),
    ("Xbox Series X"),
    ("PC");
    
INSERT INTO GENEROS(NOME, DESCRICAO)
VALUES
	("Esportes", NULL),
	("Ação", NULL),
    ("Aventura", NULL),
    ("Multijogador local", NULL),
    ("Multijogador Online", NULL),
    ("Console", NULL);

INSERT INTO PRODUTOS(ID_FORNECEDOR, ID_PLATAFORMA, NOME, DATA_LANCAMENTO, PRECO_COMPRA, PRECO_VENDA, CLASSIFICACAO, DESCRICAO, ESTOQUE)
VALUES
	(1,7,"FIFA 22","2021-09-27",49.90,99.90,"Livre","FIFA 22 é o novo jogo da renomada franquia de futebol, utilizando a tecnologia HyperMotion de última geração, que integra dados avançados de movimento de equipe e aprendizado de máquina para melhorar a jogabilidade.", 14),
	(1, 3,"FIFA 22","2021-09-27",49.90,99.90,"Livre","FIFA 22 é o novo jogo da renomada franquia de futebol, utilizando a tecnologia HyperMotion de última geração, que integra dados avançados de movimento de equipe e aprendizado de máquina para melhorar a jogabilidade.", 2),
    (2,6,"Assassins Creed: Valhalla","2020-11-10",65.45,149.90,"18+","Assassin's Creed Valhalla se ambienta no passado histórico do século IX.", 8),
    (4, 2,"Grand Thefht Auto V","2013-09-17",35,79.90,"18+","O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos.", 22),
    (5,3,"Console Playstation 5","2020-01-01",2800,4199.00,"Livre","O aparelho também traz retrocompatibilidade para a maioria dos jogos do PS4 e integração com o PlayStation VR.", 15);

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
	(5,6);

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
    (2,3,1,"2022-06-15",10,1);

INSERT INTO PRODUTOS_VENDAS(ID_PRODUTO,ID_VENDA,QUANTIDADE, PRECO_VENDA)
VALUES 
	(1,1,1,99.90),
	(2,1,1,99.90),
	(3,2,1,149.90),
	(5,5,5,4199.00),
	(2,4,1,99.90),
    (3,3,1,149.90);

INSERT INTO COMPRAS(ID_PAGAMENTO, DATA_COMPRA, DESCONTO, PARCELAMENTO)
VALUES
	(3, "2022-01-12", 5, 3),
    (3,"2022-02-07", 0, 1),
    (3, "2022-04-26", 15, 12),
    (3, "2022-05-16", 10, 1),
    (3, "2022-06-02", 0, 2);
    
INSERT INTO PRODUTOS_COMPRAS(ID_COMPRA, ID_PRODUTO, QUANTIDADE, PRECO_COMPRA)
VALUES (1, 4, 15, 14.90),
	(1, 1, 5, 59.90),
    (2, 1, 2, 59.90),
    (3, 5, 20, 3199.00),
    (4, 1, 5, 100.00),
    (5, 1, 3, 59.90),
    (5, 3, 10, 5.90),
    (5, 4, 7, 19.90),
    (5, 2, 4, 59.90);