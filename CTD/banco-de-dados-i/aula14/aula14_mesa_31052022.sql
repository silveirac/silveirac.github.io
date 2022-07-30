-- MESA DE TRABALHO - AULA 14 (31/05/2022) - BANCO DE DADOS I
-- EQUIPE 3

-- INTEGRANTES
-- CAIRO RAMON
-- CAUÊ SILVEIRA
-- IGOR AVELAR
-- PATRICK TURTCHIN

-- Usando a base musimundos_V2, execute as seguintes consultas:

-- 1 - Selecione o nome dos artistas(tabela artistas)  com o nome de seus albuns (tabela albuns) ordenado por id do artista.
SELECT
	A.NOME AS 'NOME DO ARTISTA',
    AB.TITULO AS 'TITULO DO ÁLBUM'
FROM ARTISTAS AS A
INNER JOIN ALBUNS AS AB ON AB.ID_ARTISTA = A.ID
ORDER BY
	A.ID;


-- 2 - Selecione o nome do cliente (clientes) e suas faturas (faturas), porém somente as faturas com valor maior de 5 ordenados pelo valor da fatura decrescente.
SELECT
	C.NOME AS 'NOME DO CLIENTE',
    F.ID AS 'ID DA FATURA',
    F.VALOR_TOTAL AS 'VALOR DA FATURA'
FROM FATURAS AS F
INNER JOIN CLIENTES AS C ON C.ID = F.ID_CLIENTE
WHERE
	F.VALOR_TOTAL > 5
ORDER BY
	F.VALOR_TOTAL DESC;


-- 3 Selecione o nome das cancoes (tabela cancoes) e o tipo de arquivo (tabela tipos_de_arquivos) e exiba o nome da canção e o tipo ordenado pelo id da canção.
SELECT
	C.ID,
	C.NOME AS 'NOME DA CANÇÃO',
	T.NOME AS 'TIPO DO ARQUIVO'
FROM CANCOES AS C
INNER JOIN TIPOS_DE_ARQUIVO AS T ON T.ID = C.ID_TIPO_DE_ARQUIVO
ORDER BY
	C.ID;