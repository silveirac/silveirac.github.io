-- MESA DE TRABALHO - AULA 15 - BANCO DE DADOS I
-- EQUIPE 5

USE ODONTO_DH;

-- 1.
INSERT INTO TB_VENDEDOR (NOME, ENDERECO, TELEFONE, CELULAR, EMAIL, CNPJ, NR_CONTRATO, DATA_INICIO_CONTRATO, DATA_FIM_CONTRATO, DATA_ENTRADA_SISTEMA, `STATUS`)
VALUES
	('So Love Corretora', 'RUA BRTER', '(19)3252-9786', '(19)99877-6588', 'contato@brcorretora.com.br', '00.123.456/0001-40', 87968, '2020-08-25', '2025-08-24', '2020-08-25', 'ATIVO'),
	('BR Corretora', 'RUA BRASIL', '(19)3252-9786', '(19)99877-6588', 'contato@brcorretora.com.br', '00.123.456/0001-40', 87968, '2020-08-25', '2025-08-24', '2020-08-25', 'ATIVO');


-- 2.
INSERT INTO TB_PLANO (NOME_PLANO, DESCRICAO_PLANO, DATA_CRIACAO_PLANO, VALOR_PLANO)
VALUES
	('Plano Integral Dental', 'Plano internacional de cobertura limitada', '2022-06-01', 75.00),
	('Plano Integral Dental II MAX', 'Plano internacional de cobertura ilimitada', '2022-06-01', 99.00);

-- 3.
INSERT INTO TB_HISTORICO_ASSOCIADO_PLANO (ID_ASSOCIADO, ID_PLANO, DATA_INICIO_VIGENCIA, DATA_FIM_VIGENCIA)
VALUES
	(36, 4, '2022-06-01', '2023-06-01');
    
UPDATE TB_ASSOCIADO 
SET ID_PLANO_ATUAL = 4
WHERE
	ID_ASSOCIADO = 36;
    
-- 4.
SELECT 
	COD_CARTEIRINHA,
    NOME_COMPLETO,
    COUNT(*)
FROM TB_ASSOCIADO
GROUP BY NOME_COMPLETO
ORDER BY COUNT(*) DESC;

SELECT 
	ID_ASSOCIADO,
	COD_CARTEIRINHA
FROM TB_ASSOCIADO
WHERE 
	COD_CARTEIRINHA = '9022480847.74';
    
DELETE FROM TB_ASSOCIADO
WHERE 
	ID_ASSOCIADO = '300';

-- 5.
SELECT * FROM TB_HISTORICO_ASSOCIADO_PLANO 
WHERE DATA_INICIO_VIGENCIA > DATA_FIM_VIGENCIA;
UPDATE tb_historico_associado_plano SET data_fim_vigencia = '2027-01-01' WHERE ID_HISTORICO_ASSOCIADO = '4' AND ID_HISTORICO_ASSOCIADO = '8';

-- 6.
SELECT
	ID_ASSOCIADO,
    COUNT(*)
FROM TB_ASSOCIADO_TELEFONE
GROUP BY
	ID_ASSOCIADO
HAVING
	COUNT(*) > 1;

-- 7.
UPDATE
	TB_ASSOCIADO
SET
	NOME_COMPLETO = 'Lorette Windibank Jr'
WHERE
	NOME_COMPLETO = 'Lorette Windibank';
    
SELECT
	*
FROM
	TB_ASSOCIADO
WHERE
	NOME_COMPLETO = 'Lorette Windibank Jr';


-- 8.
INSERT INTO TB_ASSOCIADO_CONTRATO (ID_ASSOCIADO, ID_VENDEDOR, DATA_INICIO_CONTRATO, DATA_FIM_CONTRATO)
VALUES
	((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Massimiliano Valenta'), 
    (SELECT ID_VENDEDOR FROM TB_VENDEDOR WHERE NOME = 'Corretora só love'), 
    '2022-06-01', 
    '2024-06-01');

INSERT INTO TB_ASSOCIADO_CONTRATO (ID_ASSOCIADO, ID_VENDEDOR, DATA_INICIO_CONTRATO, DATA_FIM_CONTRATO)
VALUES
	((SELECT ID_ASSOCIADO FROM TB_ASSOCIADO WHERE NOME_COMPLETO = 'Jessika Eilhersen'), 
    (SELECT ID_VENDEDOR FROM TB_VENDEDOR WHERE NOME = 'Corretora só love'), 
    '2022-06-01', 
    '2024-06-01');


-- 9.
ALTER TABLE TB_ASSOCIADO
ADD CONTRATO_FISICO VARCHAR(20);

UPDATE TB_ASSOCIADO
SET
	CONTRATO_FISICO = '12345'
WHERE
	CONTRATO_FISICO IS NULL;


-- 10.
CREATE TABLE TB_TIPO_ASSOCIADO_NEGOCIACAO (
	ID_ASSOCIADO_NEGOCIACAO INT NOT NULL AUTO_INCREMENT,
    ID_ASSOCIADO INT,
    TIPO VARCHAR(10),
    PRIMARY KEY (ID_ASSOCIADO_NEGOCIACAO),
    CONSTRAINT FK_ASSOCIADO_NEGOCIACAO_ASSOCIADO
		FOREIGN KEY (ID_ASSOCIADO)
        REFERENCES TB_ASSOCIADO (ID_ASSOCIADO));


-- 11.
DELETE FROM
	TB_ASSOCIADO
WHERE
	ID_CATEGORIA = (SELECT ID_CATEGORIA FROM TB_CATEGORIA WHERE NOME = 'DEPENDENTE');


	