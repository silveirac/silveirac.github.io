-- EQUIPE 1
-- MESA DE TRABALHO - BANCO DE DADOS I - 23/05/2022
-- INTEGRANTES:
-- CAUÊ SILVEIRA
-- PAULO BORGES
-- AMANDA REIS
-- MICHEL NASCIMENTO
-- JOSIANE MOTA
-- DIOGO RODRIGUES

-- DML

-- SELECIONAR BANCO DE DADOS A SER MANIPULADO
USE DHTUBE;

-- INSERT (CRIAÇÃO DE REGISTROS)
INSERT INTO AVATAR (NOME, URL_IMAGEM)
VALUES
("CACHORRO", "http://www.avatares.com.br/foto_de_cachorro"),
("GATO", "http://www.avatares.com.br/foto_de_gato"),
("PAPAGAIO", "http://www.avatares.com.br/foto_de_papagaio");

INSERT INTO PAIS (NOME)
VALUES
("Brasil"),
("Argentina"),
("Paraguai");

INSERT INTO USUARIO (NOME, EMAIL, SENHA, DATA_NASCIMENTO, CEP, ID_PAIS, ID_AVATAR)
VALUES
("Jorge Coutinho", "jorge.coutinho@digitalhouse.com.br", "Bda123*", "1900-1-1 00:00:01", "13000-000", 1, 3);

-- SELECT (REALIZA CONSULTA NAS TABELAS)
SELECT * FROM AVATAR;
SELECT * FROM PAIS;
SELECT * FROM USUARIO;

-- UPDATE (ALTERA VALORES DE ATRIBUTOS DOS REGISTROS DE UMA TABELA)
UPDATE USUARIO
SET SENHA = "321Bd@"
WHERE EMAIL = "jorge.coutinho@digitalhouse.com.br";

-- DELETE (EXCLUI REGISTROS DE UMA TABELA)
DELETE FROM PAIS
WHERE NOME = "Paraguai";