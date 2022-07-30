USE MUSIMUNDOS;

-- Referência de Tabelas #1 - Faça uma consulta no banco de dados onde mostre todos os registros que contenham músicas com seus gêneros, 
-- E que o compositor seja Willie Dixon, E que tenham o gênero Blues.
-- A 2ª música encontrada foi: PRETTY BABY
SELECT DISTINCT
	C.NOME AS 'MUSICA',
    G.NOME AS 'GÊNERO',
    C.COMPOSITOR AS 'COMPOSITOR'
FROM CANCOES AS C
INNER JOIN GENEROS AS G ON G.ID = C.ID_GENERO
WHERE
	C.COMPOSITOR = 'WILLIE DIXON'
    AND
	G.NOME = 'BLUES';
    
    
-- Joins #1 - Faça uma consulta ao nosso banco de dados que nos retorna as únicas músicas que possuem gênero rock.
-- Qual é a música que aparece em quarto lugar? R: RESTLESS AND WILD
SELECT
	C.NOME AS 'MUSICA',
    G.NOME AS 'GÊNERO'
FROM CANCOES AS C
INNER JOIN GENEROS AS G ON G.ID = C.ID_GENERO
WHERE
	G.NOME = 'ROCK';
    

-- Joins #2 -Faça uma consulta ao nosso banco de dados que nos traga o título do álbum e o autor, para saber se o que estamos vendendo está correto.
-- Qual o título do álbum que aparece na posição número 10? R: AUDIOSLAVE
SELECT
	AB.TITULO AS 'NOME DO ALBUM',
    A.NOME AS 'NOME DO ARTISTA'
FROM ALBUNS AS AB
INNER JOIN ARTISTAS AS  A ON A.ID = AB.ID_ARTISTA;

-- Joins #3 - Faça uma consulta que retorne o nome das músicas e o tipo de arquivo "MPEG audio file".
-- Qual o nome da músca que aparece na posição número 4? R: Inject The Venom
SELECT
	C.NOME AS 'MÚSICA',
    T.NOME AS 'TIPO DO ARQUIVO'
FROM CANCOES AS C
INNER JOIN TIPOS_DE_ARQUIVO AS T ON T.ID = C.ID_TIPO_DE_ARQUIVO
WHERE
	T.NOME = 'MPEG AUDIO FILE';
    
    
-- Distinct #1 - Faça uma consulta na tabela empregados.
-- O cargo que aparece na 3a. posição é: R: Sales Support Agent
SELECT DISTINCT
		E.TITULO AS 'NOME DO EMPREGADO'
FROM EMPREGADOS AS E;

-- Distinct #2 - Ranking cancoes: Faça uma consulta com o nome de todas as músicas que estão em uma lista de reprodução, e o nome da lista de reprodução a que pertencem.Observação!
-- Tenhamos cuidado para não repetir os nomes das músicas.Para esta consulta, teremos que usar informações das tabelas cancoes, cancoes_playlists e playlists. 
-- O título da música na 5a. posição é: R: Princess of the Dawn
SELECT DISTINCT
	C.NOME AS 'MUSICA',
    P.NOME AS 'PLAYLIST'
FROM CANCOES_PLAYLISTS AS CP
INNER JOIN CANCOES AS C ON C.ID = CP.ID_CANCAO
INNER JOIN PLAYLISTS AS P ON P.ID = CP.ID_PLAYLIST;


-- Funcoes MySQL I #1 - Ranking cancoes 2: O departamento de desenvolvimento da Musimundos está preparando a parte do aplicativo em que acessamos uma determinada música.
-- Eles nos dizem que um texto específico deve aparecer abaixo da imagem da música: "A música" (nome do tema) "foi composta por" (compositor do tema).
-- Faça uma consulta ao nosso banco de dados que nos traga o nome e o compositor de cada música, sem repetições, adicionando o texto acima. O primeiro resultado é: R: 'A música For Those About To Rock (We Salute You) foi composta por Angus Young, Malcolm Young, Brian Johnson.'
SELECT DISTINCT
	CONCAT('A música ', NOME, ' foi composta por ', COMPOSITOR, '.')
FROM CANCOES;


-- Funcoes MySQL I #2 - Faturas: Faça uma consulta ao banco de dados que nos traga a primeira coluna não nula que encontrar entre as colunas estado_cobranca, pais_cobranca e cep_cobranca.
-- O primeiro resultado obtido é: R: 'Germany'
SELECT
	COALESCE(ESTADO_COBRANCA, PAIS_COBRANCA, CEP_COBRANCA)
FROM FATURAS;


-- Funcoes MySQL I #3 - Idade Empregados: Faça uma consulta no banco de dados que mostre a diferença entre sua data de nascimento e a data de contratação.
-- Digite a terceira diferença que você obteve. DICA: Lembre-se de que DATEDIFF () retorna a diferença entre as datas expressas em DIAS.
-- Levando isso em consideração e sabendo que um ano tem 365 dias, como você faria a consulta? R: 27 anos
-- Para ajudá-lo, apresentamos a função FLOOR (), que arredonda qualquer número para casas decimais. 
SELECT
	CONCAT(FLOOR(DATEDIFF(DATA_CONTRATACAO, DATA_NASCIMENTO) / 365), ' anos') AS 'DIFERENÇA NASCIMENTO/CONTRATAÇÃO'
FROM EMPREGADOS;


-- Funções MySQL I #4 - Última fatura: Faça uma consulta ao banco de dados que traga todas as faturas do cliente número 2 solicitadas por sua data e extraia o mês.
-- Qual foi o mês da sua última fatura? R: 12
SELECT
	C.NOME AS 'NOME DO CLIENTE',
    C.SOBRENOME AS 'SOBRENOME DO CLIENTE',
    F.ID AS 'ID DA FATURA',
    F.VALOR_TOTAL AS 'VALOR DA FATURA',
    EXTRACT(MONTH FROM F.DATA_FATURA)
FROM FATURAS AS F
INNER JOIN CLIENTES AS C ON C.ID = F.ID_CLIENTE
WHERE
	C.ID = 2
ORDER BY
	F.DATA_FATURA
    DESC;