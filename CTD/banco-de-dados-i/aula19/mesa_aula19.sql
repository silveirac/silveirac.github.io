-- MESA DE TRABALHO | AULA 19 | BANCO DE DADOS I
-- EQUIPE 2
	-- CAUÊ SILVEIRA
    -- DIOGO RODRIGUES
    -- JOSIANE MOTA


USE EMARKET;

-- Instruções


-- 1) Empregados

-- a) Crie uma SP que liste os sobrenomes e nomes dos empregados, ordenados alfabeticamente.
DELIMITER $$
CREATE PROCEDURE SP_NOMES_FUNCIONARIOS () 
BEGIN
	SELECT
		NOME,
        SOBRENOME
	FROM 
		EMPREGADOS
	ORDER BY
		NOME ASC,
        SOBRENOME ASC;
END $$

-- b) Invoque a SP para verificar o resultado.
CALL SP_NOMES_FUNCIONARIOS();




-- 2) Empregados por cidade

-- a) Crie uma SP que leva o nome de uma cidade e lista os funcionários dessa cidadeDELIMITER $$
CREATE PROCEDURE SP_FUNCIONARIOS_CIDADE (
	IN CITY VARCHAR(15)
)
BEGIN
	SELECT
		NOME,
        SOBRENOME
	FROM
		EMPREGADOS
	WHERE
		CIDADE = CITY
	ORDER BY
		NOME ASC,
        SOBRENOME ASC;
END $$

-- b) Invoque a SP para listar os empregados de Seattle.
CALL SP_FUNCIONARIOS_CIDADE('Seattle');




-- 3) Clientes por país

-- a) Crie uma SP que recebe o nome de um país e retorne o número de clientes naquele país.
DELIMITER $$
CREATE PROCEDURE SP_CLIENTES_PAIS (
	IN COUNTRY VARCHAR(15)
)
BEGIN
	SELECT
		COUNT(CLIENTEID) AS 'QUANTIDADE DE CLIENTES'
	FROM
		CLIENTES
	WHERE
		PAIS = COUNTRY
	ORDER BY
		PAIS ASC;
END $$

-- b) Invoque a SP para consultar a quantidade de clientes de Portugal.
CALL SP_CLIENTES_PAIS('Portugal');




-- 4) Produtos sem estoque

-- a) Crie uma SP que receba um número e liste os produtos cujo estoque está abaixo desse número. O resultado deve mostrar o nome do produto, o Estoque atual e o nome da categoria à qual o produto pertence.
DELIMITER $$
CREATE PROCEDURE SP_PRODUTO_PONTO_DE_REPOSICAO (
	IN QTD_MINIMA SMALLINT
)
BEGIN
	SELECT
		P.PRODUTONOME AS 'NOME DO PRODUTO',
        P.UNIDADESESTOQUE AS 'ESTOQUE ATUAL',
		C.CATEGORIANOME AS 'CATEGORIA'
	FROM PRODUTOS AS P
	INNER JOIN CATEGORIAS AS C
		ON C.CATEGORIAID = P.CATEGORIAID
	WHERE
		P.UNIDADESESTOQUE < QTD_MINIMA
	ORDER BY
		P.PRODUTONOME;

END $$

-- c) Liste os produtos sem estoque.
CALL SP_PRODUTO_PONTO_DE_REPOSICAO(10);

-- b) Liste os produtos com menos de 10 unidades no estoque;
CALL SP_PRODUTO_PONTO_DE_REPOSICAO(1);




-- 5) Vendas com desconto

-- a) Crie uma SP que receba uma porcentagem e lista os nomes dos produtos que foram vendidos com desconto igual ou superior ao valor indicado, indicando, também,  o nome do cliente a quem foi vendido.
DELIMITER $$
CREATE PROCEDURE SP_PRODUTO_DESCONTO(
	IN DESCONTOREF DOUBLE
)
BEGIN
	SELECT
		P.PRODUTONOME AS 'PRODUTO',
        CONCAT(ROUND(D.DESCONTO * 100, 2), '%') AS 'DESCONTO',
        C.EMPRESA AS 'CLIENTE'
	FROM DETALHEFATURA AS D
    INNER JOIN PRODUTOS AS P
		ON P.PRODUTOID = D.PRODUTOID
	INNER JOIN FATURAS AS F
		ON F.FATURAID = D.FATURAID
	INNER JOIN CLIENTES AS C
		ON C.CLIENTEID = F.CLIENTEID
	WHERE
		D.DESCONTO >= (DESCONTOREF / 100)
	ORDER BY
		P.PRODUTONOME ASC;
END $$

-- b) Liste as informações dos produtos que foram vendidos com um desconto superior a 10%.
CALL SP_PRODUTO_DESCONTO(10.0001); -- SUPERIOR a 10%. Não pode ser igual








