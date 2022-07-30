CREATE DATABASE MESA_AULA21;
USE MESA_AULA21;

-- 1. (FÁCIL) Faça uma procedure que receba dois números como entrada e imprima como saída o maior deles

DELIMITER $$
CREATE PROCEDURE SP_MAIOR(
	IN NUM1 INT,
    IN NUM2 INT,
    OUT MAIOR INT
)
BEGIN
	IF (NUM1 > NUM2) THEN
		SET MAIOR = NUM1;
	ELSE
		SET MAIOR = NUM2;
	END IF;
END $$

CALL SP_MAIOR(2, 5, @MAIOR);
SELECT @MAIOR;


-- 2. (FÁCIL)  Faça uma procedure que receba um valor como parâmetro de entrada e retorne se o valor é positivo ou negativo.


DELIMITER $$
CREATE PROCEDURE SP_POS_NEG(
	IN NUM INT,
    OUT POSNEG VARCHAR(255)
)
BEGIN
	CASE
		WHEN NUM = 0 THEN SET POSNEG = 'NUM É IGUAL A ZERO';
        WHEN NUM < 0 THEN SET POSNEG = 'NEGATIVO';
        WHEN NUM > 0 THEN SET POSNEG = 'POSIVO';
	END CASE;
END $$

CALL SP_POS_NEG(27, @POSNEG);
SELECT @POSNEG;

-- 3. (FÁCIL)  Faça uma procedure que receba como parâmetro de entrada uma letra e retorne se a letra informada é vogal ou consoante.
DELIMITER $$
CREATE PROCEDURE SP_VOGAL_CONSOANTE (
		IN LETRA CHAR(1),
        OUT RESPOSTA VARCHAR(255)
)
BEGIN
	IF (LETRA IN ('a', 'e', 'i', 'o', 'u')) THEN
		SET RESPOSTA = 'VOGAL';
	ELSE
		SET RESPOSTA = 'CONSOANTE';
	END IF;
END $$

CALL SP_VOGAL_CONSOANTE('e', @RESPOSTA);
SELECT @RESPOSTA;


-- 4. (FÁCIL)  Faça uma procedure que receba duas notas de aluno como entrada, e retorne uma mensagem conforme critérios informados abaixo: 
	-- a. Se a média do aluno for maior ou igual a 7 o retorno deve ser “Aprovado”
	-- b. Se a média do aluno for igual à 10 o retorno deve ser “Aprovado com distinção”
	-- c. Se a média for menor do que 7 o retorno deve ser “Reprovado”
DELIMITER $$
CREATE PROCEDURE SP_MEDIA(
	IN NOTA1 DOUBLE,
    IN NOTA2 DOUBLE,
    OUT APROV_REPROV VARCHAR(255)
)
BEGIN
DECLARE MEDIA DOUBLE;
SET MEDIA = (NOTA1 + NOTA2) / 2;
	CASE
		WHEN MEDIA > 10 THEN SET APROV_REPROV = 'NOTA INVÁLIDA';
		WHEN MEDIA = 10 THEN SET APROV_REPROV = 'APROVADO COM DISTINÇÃO';
        WHEN MEDIA >= 7 THEN SET APROV_REPROV = 'APROVADO';
        WHEN MEDIA < 7 THEN SET APROV_REPROV = 'REPROVADO';
	END CASE;
END $$

CALL SP_MEDIA(7, 5, @APROV_REPROV);
SELECT @APROV_REPROV;

-- 5. (FÁCIL)  Faça uma procedure que leia três números como parâmetros de entrada e retorne o maior e o menor deles
DELIMITER $$
CREATE PROCEDURE SP_MAIOR_MENOR(
	IN NUM1 INT,
    IN NUM2 INT,
    IN NUM3 INT,
    OUT MAIOR INT,
    OUT MENOR INT
)
BEGIN
	IF (NUM1 > NUM2 AND NUM1 > NUM3) THEN
		SET MAIOR = NUM1;
		IF (NUM3 > NUM2) THEN
			SET MENOR = NUM2;
		ELSE
			SET MENOR = NUM3;
		END IF;
	ELSE IF (NUM2 > NUM1 AND NUM2 > NUM3) THEN
		SET MAIOR = NUM2;
		IF (NUM3 > NUM1) THEN
			SET MENOR = NUM1;
		ELSE
			SET MENOR = NUM3;
		END IF;
	ELSE
		SET MAIOR = NUM3;
		IF (NUM2 > NUM1) THEN
			SET MENOR = NUM1;
		ELSE
			SET MENOR = NUM2;
		END IF;
	END IF;
END IF;
END $$

CALL SP_MAIOR_MENOR(4, 21, 12, @MAIOR, @MENOR);
SELECT @MAIOR, @MENOR;
        
        
-- 6. (FÁCIL) Faça uma procedure que receba três números inteiros e retorne-os em ordem decrescente.

DELIMITER $$
CREATE PROCEDURE SP_NUM_DESC(
	IN NUM1 INT,
    IN NUM2 INT,
    IN NUM3 INT
) 
BEGIN
	DROP TABLE IF EXISTS TEMP;
    CREATE TABLE TEMP(NUMERO INT);
    INSERT INTO TEMP (NUMERO) VALUES (NUM1), (NUM2), (NUM3);
    SELECT
		*
	FROM TEMP
    ORDER BY
		NUMERO DESC;
END $$

CALL SP_NUM_DESC(3, 8, 15);



-- 7.
CREATE DATABASE BANCO_VIRTUAL;
USE BANCO_VIRTUAL;

CREATE TABLE SALDO_CLIENTE(
    ID_CLIENTE INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(255) NOT NULL,
    SALDO DECIMAL
);

INSERT INTO SALDO_CLIENTE (NOME, SALDO)
VALUES
('JOSÉ DA SILVA', 1500),
('CRISTIANO RONALDO', 3000),
('LIONEL MESSI', 6000);
    
-- PROCEDURE
DELIMITER $$
CREATE PROCEDURE SP_CAIXA_ELETRONICO (
	IN ID INT,
    IN OPERACAO VARCHAR(255),
    IN VALOR DECIMAL(10, 2)
)
BEGIN
	CASE
		WHEN OPERACAO = 'SAQUE' THEN
			IF (ID IN (SELECT ID_CLIENTE FROM SALDO_CLIENTE)) THEN
				IF (VALOR <= (SELECT SALDO FROM SALDO_CLIENTE WHERE ID_CLIENTE = ID)) THEN
					UPDATE SALDO_CLIENTE
                    SET SALDO = SALDO - VALOR
                    WHERE ID_CLIENTE = ID;
					SELECT
						NOME AS 'NOME DO CLIENTE',
                        SALDO AS 'SALDO ATUAL'
					FROM
						SALDO_CLIENTE
					WHERE
						ID_CLIENTE = ID;
				ELSE
					SELECT 'Saldo insuficiente!' AS '';
				END IF;
			ELSE
				SELECT 'Cliente inexistente!' AS '';
			END IF;
		WHEN OPERACAO = 'DEPÓSITO' THEN
					UPDATE SALDO_CLIENTE
                    SET SALDO = SALDO + VALOR
                    WHERE ID_CLIENTE = ID;
					SELECT
						NOME AS 'NOME DO CLIENTE',
                        SALDO AS 'SALDO ATUAL'
					FROM
						SALDO_CLIENTE
					WHERE
						ID_CLIENTE = ID;	
		ELSE
			SELECT 'Operação inválida!' AS '';
	END CASE;
END$$

CALL SP_CAIXA_ELETRONICO(3, 'TRANSFERENCIA', 6000);
DROP PROCEDURE SP_CAIXA_ELETRONICO;




-- 8.
DELIMITER $$
CREATE PROCEDURE SP_REAJUSTE(
	IN SALARIO DECIMAL(10, 2) 
)
BEGIN
DECLARE VAR_PERCENT DECIMAL(10, 2);

CREATE TABLE TB_REAJUSTE(SAL DECIMAL(10, 2), PERCENT DECIMAL(10, 2), AUMENTO DECIMAL(10, 2), NOVOSALARIO DECIMAL(10, 2));

CASE
	WHEN SALARIO > 0 AND SALARIO <= 280 THEN SET VAR_PERCENT = 0.2;
    WHEN SALARIO > 280 AND SALARIO <= 700 THEN SET VAR_PERCENT = 0.15;
    WHEN SALARIO > 700 AND SALARIO <= 1500 THEN SET VAR_PERCENT = 0.1;
    WHEN SALARIO > 1500 THEN SET VAR_PERCENT = 0.05;
END CASE;

INSERT INTO TB_REAJUSTE(SAL, PERCENT, AUMENTO, NOVOSALARIO)
VALUES
	(SALARIO, VAR_PERCENT, (VAR_PERCENT * SALARIO), ((1 + VAR_PERCENT) * SALARIO));
    
SELECT
	CONCAT('R$', FORMAT(SAL, 2)) AS 'SALÁRIO ANTES DO REAJUSTE',
    CONCAT((PERCENT * 100), '%') AS 'PERCENTUAL DE AUMENTO APLICADO',
    CONCAT('R$', FORMAT(AUMENTO, 2)) AS 'VALOR DO AUMENTO EM REAIS',
    CONCAT('R$', FORMAT(NOVOSALARIO, 2)) AS 'NOVO SALÁRIO APÓS AUMENTO'
FROM TB_REAJUSTE;

DROP TABLE TB_REAJUSTE;
END $$

CALL SP_REAJUSTE(1247.23);




-- 9.
DELIMITER $$
CREATE PROCEDURE SP_TABUADA(
	IN NUMERO INT
)
BEGIN
	DECLARE INDEXER INT DEFAULT 1;
    
	CREATE TABLE TB_TABUADA (TABUADA VARCHAR(255));

    TABUADA: LOOP
		IF (INDEXER <= 10) THEN
			INSERT INTO TB_TABUADA (TABUADA) VALUES (CONCAT(INDEXER, ' x ', NUMERO, ' = ', (INDEXER * NUMERO)));
			SET INDEXER = INDEXER + 1;
			ITERATE TABUADA;
		END IF;
        LEAVE TABUADA;
	END LOOP TABUADA;
    
    SELECT
		TABUADA
	FROM
		TB_TABUADA;
        
DROP TABLE TB_TABUADA;
END $$

CALL SP_TABUADA(241);




-- 10. 
DELIMITER $$
CREATE PROCEDURE SP_FOLHA_PAGAMENTO (
	IN VALOR_HORA DECIMAL(10, 2),
    IN QTD_HORAS DECIMAL(10, 2)
)
BEGIN
	-- DECLARANDO VARIÁVEIS
	DECLARE ALQT_INSS DOUBLE;
    DECLARE ALQT_IR DOUBLE;
    DECLARE SALARIO DECIMAL(10, 2);
    DECLARE INSS DECIMAL(10, 2);
    DECLARE IR DECIMAL(10, 2);
    DECLARE DESCONTOS DECIMAL(10, 2);
    DECLARE SALARIO_LIQ DECIMAL(10, 2);
    
	-- POPULANDO VARIÁVEIS 
	SET SALARIO = VALOR_HORA * QTD_HORAS;
    
    CASE
		WHEN SALARIO <= 900 THEN SET ALQT_IR = 0;
        WHEN SALARIO <= 1500 THEN SET ALQT_IR = 0.05;
        WHEN SALARIO <= 2500 THEN SET ALQT_IR = 0.1;
        WHEN SALARIO > 2500 THEN SET ALQT_IR = 0.2;
	END CASE;

	SET ALQT_INSS = 0.11;
	SET INSS = (SALARIO * ALQT_INSS);
    SET IR = (SALARIO * ALQT_IR);
    SET DESCONTOS = INSS + IR;
    SET SALARIO_LIQ = SALARIO - DESCONTOS;
    
	-- CRIANDO TABELA DE EXIBIÇÃO
	CREATE TABLE TB_FOLHA_PAGAMENTO (SAL_BRUT DECIMAL(10, 2), ALIQUOTA_IR DOUBLE, IR DECIMAL(10, 2), INSS DECIMAL(10, 2), DESCONTOS DECIMAL(10, 2), SAL_LIQ DECIMAL(10, 2));
	INSERT INTO TB_FOLHA_PAGAMENTO (SAL_BRUT, ALIQUOTA_IR, IR, INSS, DESCONTOS, SAL_LIQ)
	VALUES
		(SALARIO, (ALQT_IR * 100), IR, INSS, DESCONTOS, SALARIO_LIQ);
        
	-- REALIZANDO CONSULTA DE EXIBIÇÃO
    SELECT
		CONCAT('R$', FORMAT(SAL_BRUT, 2)) AS 'SALÁRIO BRUTO',
        CONCAT(ALIQUOTA_IR, '%') AS 'IR (%)',
        CONCAT('R$', FORMAT(IR, 2)) AS '(-) IR',
        CONCAT('R$', FORMAT(INSS, 2)) AS '(-) INSS',
        CONCAT('R$', FORMAT(DESCONTOS, 2)) AS 'TOTAL DE DESCONTOS',
        CONCAT('R$', FORMAT(SAL_LIQ, 2)) AS 'SALÁRIO LÍQUIDO'
	FROM TB_FOLHA_PAGAMENTO;
    
	DROP TABLE TB_FOLHA_PAGAMENTO;
END $$

CALL SP_FOLHA_PAGAMENTO(82.73, 177);