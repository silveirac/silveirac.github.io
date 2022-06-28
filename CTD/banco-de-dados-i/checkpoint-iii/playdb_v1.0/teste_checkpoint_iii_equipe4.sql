-- --------------------------------------------------
-- INCLUSÃO DE UMA COLUNA NA TABELA
-- --------------------------------------------------
ALTER TABLE CLIENTES
ADD CLUBE TINYINT(1) NOT NULL DEFAULT 0;

-- SELECT PARA CONFERIR
SELECT
	*
FROM CLIENTES;

-- ----------------------------------------------------------------------------------------------------
-- PROCEDURES 
-- ----------------------------------------------------------------------------------------------------

-- --------------------------------------------------
-- TESTE ANIVERSARIANTE
-- --------------------------------------------------
CALL SP_ANIVERSARIANTES_MES(MONTH(CURRENT_DATE()));

-- --------------------------------------------------
-- TESTE INCLUSÃO VENDA
-- --------------------------------------------------

-- INCLUSÃO DE INTENS NO CARRINHO (ID DO PRODUTO, QUANTIDADE, PREÇO)
CALL SP_CARRINHO (1, 2, 99.90);
CALL SP_CARRINHO (2, 3, 99.90);
CALL SP_CARRINHO (3, 1, 149.90);
SELECT * FROM TEMP_CARRINHO;

-- INCLUSÃO DA VENDA NA TABELA PLAYDB.VENDAS
CALL SP_ADD_VENDA (5, 1, 1, 10, 3);


-- --------------------------------------------------
-- TESTE INCLUSÃO COMPRA
-- --------------------------------------------------

-- INCLUSÃO DE INTENS NO PEDIDO DE COMPRA
CALL SP_PEDIDO (1, 5, 50.90);
CALL SP_PEDIDO (2, 3,50.90);
CALL SP_PEDIDO (3, 1,115.90);
SELECT * FROM TEMP_PEDIDO;

-- INCLUSÃO DA VENDA NA TABELA PLAYDB.COMPRAS
CALL SP_ADD_COMPRA (3, 10, 1);

-- ----------------------------------------------------------------------------------------------------
-- VIEWS
-- ----------------------------------------------------------------------------------------------------

-- --------------------------------------------------
-- VIEW RESUMO DE VENDAS
-- --------------------------------------------------
SELECT * FROM VW_RESUMO_VENDAS;

-- RESUMO DE VENDAS DE UM CLIENTE ESPECÍFICO
SELECT 
	* 
FROM VW_RESUMO_VENDAS
WHERE 
	CLIENTE LIKE "%DARLEI%";
    
-- RESUMO DE VENDAS DO MÊS E ANO ATUAL
SELECT 
	* 
FROM VW_RESUMO_VENDAS
WHERE 
	MONTH(STR_TO_DATE(DATA_VENDA, "%d/%m/%Y")) = 4 AND YEAR(STR_TO_DATE(DATA_VENDA, "%d/%m/%Y")) = YEAR(CURRENT_DATE());

-- --------------------------------------------------
-- VIEW RESUMO DE COMPRAS
-- --------------------------------------------------
SELECT * FROM VW_RESUMO_COMPRAS;

-- --------------------------------------------------
-- VIEW RESUMO DOS PRODUTOS
-- --------------------------------------------------
SELECT * FROM VW_RESUMO_PRODUTOS;

-- RESUMO DE UM PRODUTO PELO NOME
SELECT
	* 
FROM VW_RESUMO_PRODUTOS
WHERE 
	PRODUTO LIKE "%GRAND%";

-- RESUMO DE UM PRODUTO PELO NOME E PLATAFORMA ESPECÍFICA
SELECT * FROM VW_RESUMO_PRODUTOS
WHERE PRODUTO LIKE "%FIFA%" AND PLATAFORMA LIKE "PC";


-- --------------------------------------------------
-- VIEW CLIENTE FIEL (RANQUEADO POR VALOR)
-- --------------------------------------------------
SELECT * FROM VW_CLIENTE_FIEL;

-- TOP 3 CLIENTES
SELECT * FROM VW_CLIENTE_FIEL LIMIT 3;