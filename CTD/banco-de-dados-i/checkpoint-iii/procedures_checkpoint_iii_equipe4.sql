USE PLAYDB;

-- Listagem de aniversariantes de um mês específico

DELIMITER $$
CREATE PROCEDURE SP_ANIVERSARIANTES_MES (
	IN MES VARCHAR(15)
)
BEGIN
	SELECT
		CONCAT(NOME, ' ', SOBRENOME) AS 'Nome',
        TELEFONE AS 'Telefone',
        EMAIL AS 'E-mail',
        DATE_FORMAT(DATA_NASCIMENTO, '%d/%m') AS 'Aniversário'
	FROM CLIENTES
    WHERE
		MONTH(DATA_NASCIMENTO) = MES
	ORDER BY
		DAY(DATA_NASCIMENTO) ASC;
END $$

CALL SP_ANIVERSARIANTES_MES(MONTH(CURRENT_DATE()));

-- Nova compra
DELIMITER $$ 
CREATE PROCEDURE SP_ADD_COMPRA(
    IN IDCLIENTE INT, 
    IN IDVENDEDOR INT, 
    IN IDPAG INT,
    IN DESCONTO INT,
    IN PARCELAS INT
)
BEGIN
	-- DECALRAÇÃO DE VARIÁVEIS
	DECLARE INDEXER INT DEFAULT 1;
    DECLARE PRODID INT;
    DECLARE QUANTIDADE INT;
    DECLARE IDVENDAATUAL INT;
    SET IDVENDAATUAL= (SELECT @@IDENTITY FROM VENDAS LIMIT 1);
    
	-- CRIANDO A VENDA NA TABELA PLAYDB.VENDAS
    INSERT INTO VENDAS (ID_CLIENTE, ID_PAGAMENTO, ID_VENDEDOR, DATA_VENDA, DESCONTO, PARCELAMENTO)
    VALUES
		(IDCLIENTE, IDPAG, IDVENDEDOR, CURRENT_DATE(), DESCONTO, PARCELAS);

	-- INCLUSÃO DE PRODUTOS DO CARRINHO NA TABELA PLAYDB.PRODUTOS_VENDAS
	ADDPV: WHILE (INDEXER <= @CARRINHO_COUNT) DO
		SET PRODID = (SELECT PRODID FROM TEMP_CARRINHO WHERE IDCARRINHO = INDEXER);
        SET QUANTIDADE = (SELECT QUANTIDADE FROM TEMP_CARRINHO WHERE IDCARRINHO = INDEXER);
        INSERT INTO PRODUTOS_VENDAS (ID_PRODUTO, ID_VENDA, QUANTIDADE)
		VALUES
			(PRODID, IDVENDAATUAL, QUANTIDADE);
		SET INDEXER = INDEXER + 1;
	END WHILE ADDPV;

    -- UPDATE PRODUTOS 
    -- SET ESTOQUE = ESTOQUE - 1
    -- WHERE ID_PRODUTO = IDPRODUTO;
END $$


CALL SP_ADD_COMPRA (1, 1, 1, 10, 3);
DROP PROCEDURE SP_ADD_COMPRA;

SELECT * FROM PRODUTOS_VENDAS;

DELIMITER $$
CREATE PROCEDURE SP_CARRINHO (
	IN PRODUTOID INT,
    IN QTD INT
)
BEGIN
	DECLARE CARRINHO_COUNT INT;
    CREATE TABLE IF NOT EXISTS TEMP_CARRINHO (
		IDCARRINHO INT NOT NULL AUTO_INCREMENT,
		PRODID INT,
        QUANTIDADE INT,
        PRIMARY KEY (IDCARRINHO)
	);
    
    INSERT INTO TEMP_CARRINHO (PRODID, QUANTIDADE)
    VALUES
		(PRODUTOID, QTD);
	
    SET @CARRINHO_COUNT = (SELECT COUNT(IDCARRINHO) FROM TEMP_CARRINHO);
END $$

CALL SP_CARRINHO (1, 5);
CALL SP_CARRINHO (2, 3);
CALL SP_CARRINHO (3, 1);

DROP PROCEDURE SP_CARRINHO;

SELECT * FROM TEMP_CARRINHO;

DELIMITER $$
CREATE PROCEDURE SP_TESTE (
	IN NUM INT
)
BEGIN
	DECLARE PRODUCT INT;
	DECLARE QUANTITY INT;
	SET PRODUCT = (SELECT PRODID FROM TEMP_CARRINHO WHERE IDCARRINHO = @ID);
	SET QUANTITY = (SELECT QUANTIDADE FROM TEMP_CARRINHO WHERE IDCARRINHO = @ID);
SELECT PRODUTC, QUANTITY;
END
$$

CALL SP_TESTE(1);

DROP PROCEDURE SP_TESTE;