USE PLAYDB;

-- -------------------------------------------------
-- PROCEDURE PARA LISTAGEM DE ANIVERSARIANTES DE UM MÊS ESPECÍFICO
-- -------------------------------------------------
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


-- -------------------------------------------------
-- PROCEDURES PARA VENDA
-- -------------------------------------------------

-- VERIFICA SE O CARRINHO ESTÁ VAZIO
DELIMITER $$
CREATE PROCEDURE SP_CARRINHO_EXISTE(
	OUT CARRINHO_EXISTE INT
)
BEGIN
	SELECT 
		COUNT(*)
	INTO
		CARRINHO_EXISTE
	FROM INFORMATION_SCHEMA.tables 
	WHERE 
		TABLE_SCHEMA = DATABASE()
		AND 
		TABLE_NAME = "TEMP_CARRINHO";
END $$

-- INCLUIR ITEM NO CARRINHO
DELIMITER $$
CREATE PROCEDURE SP_CARRINHO (
	IN PRODUTOID INT,
    IN QTD INT,
    IN PRECO DECIMAL(10,2)
)
BEGIN
	IF((SELECT ESTOQUE FROM PRODUTOS WHERE ID_PRODUTO = PRODUTOID) >= QTD) THEN
		CREATE TABLE IF NOT EXISTS TEMP_CARRINHO (
			IDCARRINHO INT NOT NULL AUTO_INCREMENT,
			PRODID INT,
			QUANTIDADE INT,
			PRECO DECIMAL(10,2),
			PRIMARY KEY (IDCARRINHO)
		);
        INSERT INTO TEMP_CARRINHO (PRODID, QUANTIDADE, PRECO)
        VALUES
            (PRODUTOID, QTD, PRECO);
         SET @CARRINHO_COUNT = (SELECT COUNT(IDCARRINHO) FROM TEMP_CARRINHO);
         SELECT "PRODUTO ADICIONADO COM SUCESSO" AS ALERTA;
    ELSE
        SELECT "ESTOQUE INSUFICIENTE NO MOMENTO" AS ALERTA;
    END IF;
END $$

-- INCLUIR NOVA VENDA
DELIMITER $$ 
CREATE PROCEDURE SP_ADD_VENDA(
    IN IDCLIENTE INT, 
    IN IDVENDEDOR INT, 
    IN IDPAG INT,
    IN DESCONTO INT,
    IN PARCELAS INT
)
BEGIN
	-- DECALRAÇÃO DE VARIÁVEIS
	DECLARE INDEXER INT DEFAULT 1;
    DECLARE PRODUTO_CARRINHO INT;
    DECLARE QUANTIDADE_CARRINHO INT;
    DECLARE PRECO_CARRINHO DECIMAL(10,2);
    DECLARE IDVENDAATUAL INT;
    
    CALL SP_CARRINHO_EXISTE(@CARRINHO_EXISTE);
    IF (@CARRINHO_EXISTE = 1) THEN
    
		-- CRIANDO A VENDA NA TABELA PLAYDB.VENDAS
		INSERT INTO VENDAS (ID_CLIENTE, ID_PAGAMENTO, ID_VENDEDOR, DATA_VENDA, DESCONTO, PARCELAMENTO)
		VALUES
			(IDCLIENTE, IDPAG, IDVENDEDOR, CURRENT_DATE(), DESCONTO, PARCELAS);
            
		SET @IDVENDAATUAL= (SELECT @@IDENTITY FROM VENDAS LIMIT 1);
        
		-- INCLUSÃO DE PRODUTOS DO CARRINHO NA TABELA PLAYDB.PRODUTOS_VENDAS
		ADDPV: WHILE (INDEXER <= @CARRINHO_COUNT) DO
			SELECT PRODID INTO PRODUTO_CARRINHO FROM TEMP_CARRINHO WHERE IDCARRINHO = INDEXER;
			SELECT QUANTIDADE INTO QUANTIDADE_CARRINHO FROM TEMP_CARRINHO WHERE IDCARRINHO = INDEXER;
			SELECT PRECO INTO PRECO_CARRINHO FROM TEMP_CARRINHO WHERE IDCARRINHO = INDEXER;
			INSERT INTO PRODUTOS_VENDAS (ID_PRODUTO, ID_VENDA, QUANTIDADE, PRECO_VENDA)
			VALUES
				(PRODUTO_CARRINHO, @IDVENDAATUAL, QUANTIDADE_CARRINHO, PRECO_CARRINHO);
			
			-- ATUALIZANDO ESTOQUE E PREÇO DE VENDA
			UPDATE PRODUTOS 
			SET ESTOQUE = ESTOQUE - QUANTIDADE_CARRINHO, PRECO_VENDA = PRECO_CARRINHO
			WHERE ID_PRODUTO = PRODUTO_CARRINHO;
			
			-- INCREMENTANDO CONTADOR
			SET INDEXER = INDEXER + 1;
		END WHILE ADDPV;
        
        -- RETORNAR DADOS DA VENDA
        SELECT * FROM VW_RESUMO_VENDAS WHERE `ID VENDA` = @IDVENDAATUAL;
	ELSE
		SELECT "NENHUM PRODUTO FOI ADICIONADO AO CARRINHO" AS "ALERTA!";
	END IF;
    DROP TABLE IF EXISTS TEMP_CARRINHO;
END $$





-- -------------------------------------------------
-- PROCEDURES PARA COMPRA DE MERCADORIA
-- -------------------------------------------------

-- VERIFICA SE HÁ ITENS NO PEDIDO AOS FORNECEDORES
DELIMITER $$
CREATE PROCEDURE SP_PEDIDO_EXISTE(
	OUT SP_PEDIDO_EXISTE INT
)
BEGIN
	SELECT 
		COUNT(*)
	INTO
		SP_PEDIDO_EXISTE
	FROM INFORMATION_SCHEMA.tables 
	WHERE 
		TABLE_SCHEMA = DATABASE()
		AND 
		TABLE_NAME = "TEMP_PEDIDO";
END $$

-- INCLUIR ITEM NO PEDIDO
DELIMITER $$
CREATE PROCEDURE SP_PEDIDO (
	IN PRODUTOID INT,
    IN QTD INT,
    IN PRECO DECIMAL(10,2)
)
BEGIN

    CREATE TABLE IF NOT EXISTS TEMP_PEDIDO (
		IDPEDIDO INT NOT NULL AUTO_INCREMENT,
		PRODID INT,
        QUANTIDADE INT,
        PRECO DECIMAL(10,2),
        PRIMARY KEY (IDPEDIDO)
	);
    
    INSERT INTO TEMP_PEDIDO (PRODID, QUANTIDADE, PRECO)
    VALUES
		(PRODUTOID, QTD, PRECO);
	
    SET @PEDIDO_COUNT = (SELECT COUNT(IDPEDIDO) FROM TEMP_PEDIDO);
END $$



-- INCLUIR NOVA COMPRA
DELIMITER $$ 
CREATE PROCEDURE SP_ADD_COMPRA(
    IN IDPAG INT,
    IN DESCONTO INT,
    IN PARCELAS INT
)
BEGIN
	-- DECALRAÇÃO DE VARIÁVEIS
	DECLARE INDEXER INT DEFAULT 1;
    DECLARE PRODUTO_PEDIDO INT;
    DECLARE QUANTIDADE_PEDIDO INT;
    DECLARE PRECO_PEDIDO DECIMAL(10,2);
    DECLARE IDVENDAATUAL INT;
    
    CALL SP_PEDIDO_EXISTE(@PEDIDO_EXISTE);
    IF (@PEDIDO_EXISTE = 1) THEN
    
		-- CRIANDO A VENDA NA TABELA PLAYDB.COMPRAS
		INSERT INTO COMPRAS (ID_PAGAMENTO, DATA_COMPRA, DESCONTO, PARCELAMENTO)
		VALUES
			(IDPAG, CURRENT_DATE(), DESCONTO, PARCELAS);
            
		SET @IDCOMPRAATUAL= (SELECT @@IDENTITY FROM COMPRAS LIMIT 1);
        
		-- INCLUSÃO DE PRODUTOS DO PEDIDO NA TABELA PLAYDB.PRODUTOS_COMPRAS
		ADDPV: WHILE (INDEXER <= @PEDIDO_COUNT) DO
			SELECT PRODID INTO PRODUTO_PEDIDO FROM TEMP_PEDIDO WHERE IDPEDIDO= INDEXER;
			SELECT QUANTIDADE INTO QUANTIDADE_PEDIDO FROM TEMP_PEDIDO WHERE IDPEDIDO = INDEXER;
			SELECT PRECO INTO PRECO_PEDIDO FROM TEMP_PEDIDO WHERE IDPEDIDO = INDEXER;
			INSERT INTO PRODUTOS_COMPRAS (ID_PRODUTO, ID_COMPRA, QUANTIDADE, PRECO_COMPRA)
			VALUES
				(PRODUTO_PEDIDO, @IDCOMPRAATUAL, QUANTIDADE_PEDIDO, PRECO_PEDIDO);
			
			-- ATUALIZANDO ESTOQUE E PREÇO DE VENDA
			UPDATE PRODUTOS 
			SET ESTOQUE = ESTOQUE + QUANTIDADE_PEDIDO, PRECO_COMPRA = PRECO_PEDIDO
			WHERE ID_PRODUTO = PRODUTO_PEDIDO;
			
			-- INCREMENTANDO CONTADOR
			SET INDEXER = INDEXER + 1;
		END WHILE ADDPV;
        
        -- RETORNAR DADOS DA VENDA
        SELECT * FROM VW_RESUMO_COMPRAS WHERE `ID COMPRA` = @IDCOMPRAATUAL;
	ELSE
		SELECT "NENHUM PRODUTO FOI ADICIONADO AO PEDIDO" AS "ALERTA!";
	END IF;
    DROP TABLE IF EXISTS TEMP_PEDIDO;
END $$
