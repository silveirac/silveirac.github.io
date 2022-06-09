/* REALIZAÇÃO DE INSTRUÇÕES CRUD SIMPLES */



/* CREATE (Crud)  - INSERÇÃO DE REGISTROS */

/* INCLUSÃO DE SETORES (3 REGISTROS) */
INSERT INTO SETOR (NOME_SETOR, PRIORITARIO)
VALUES
    ('Elevatória Taquaral', 0),
    ('Captação Rio Atibaia', 1),
    ('Reservatório DIC V', 0);

/* INCLUSÃO DE REQUISITANTES (6 REGISTROS) */
INSERT INTO REQUISITANTE (ID_SETOR, NOME, SOBRENOME, PODE_SOLICITAR)
VALUES
    (1, 'Marcio', 'Silva', 1),
    (3, 'Paulo', 'Almeida de Oliveira', 1),
    (2, 'Isabel', 'Souza', 1),
    (2, 'David', 'Pereira da Silva', 1),
    (2, 'Enzo', 'Bezerra dos Santos', 0),
    (2, 'Célia', 'Teixeira', 1);

/* INCLUSÃO DE OFICINAS (2 REGISTROS) */
INSERT INTO OFICINA (NOME_OFICINA)
VALUES
    ('Hidráulica'),
    ('Elétrica');

/* INCLUSÃO DE EQUIPAMENTOS (3 REGISTROS) */
INSERT INTO EQUIPAMENTO (ID_OFICINA, FABRICANTE, MODELO, NUMERO_SERIE, TIPO_EQUIPAMENTO)
VALUES
    (1, 'WEG', 'ME W25 Alta Rotação', 'ME55863A', 'Motor Elétrico'),
    (2, 'Flygt', 'FLYGT 2250', 'BR88265-04', 'Bomba Submersível'),
    (2, 'Grundfos', 'VG Series Cloro', '1559.2021', 'Dosador');

/* INCLUSÃO DE ESPECIALIDADE (4 REGISTROS) */
INSERT INTO ESPECIALIDADE (ID_OFICINA, NOME_ESPECIALIDADE, INSALUBRIDADE, PERICULOSIDADE)
VALUES
    (1, 'Encanador', 1, 0),
    (1, 'Mecânico Hidráulico', 1, 0),
    (2, 'Eletricista', 0, 1),
    (2, 'Ajudante de Eletricista', 0, 0);

/* INCLUSÃO DE TECNICOS (5 REGISTROS) */
INSERT INTO TECNICO (ID_ESPECIALIDADE, NOME, SOBRENOME, ASO_OK)
VALUES
    (2, 'Jarbas', 'Pereira', 1),
    (1, 'José Carlos', 'Amâncio', 1),
    (3, 'Paulo', 'Machado', 1),
    (3, 'Manoel', 'Vieira', 0),
    (4, 'Janaína', 'Santana', 1);

/* INCLUSÃO DE TREINAMENTOS (7 REGISTROS) */
INSERT INTO TREINAMENTO (ID_TECNICO, TITULO_TREINAMENTO, NR, VALIDADE)
VALUES
    (1, 'NR33 - Espaço Confinado: Vigia', 1, '2022-07-09'),
    (1, 'NR35 - Trabalho em Altura', 1, '2023-10-12'),
    (2, 'NR33 - Espaço Confinado: Supervisor', 1, '2022-07-09'),
    (2, 'NR35 - Trabalho em Altura', 1, '2023-10-12'),
    (3, 'NR10 SEP', 1, '2023-01-05'),
    (4, 'NR10 SEP', 1, '2022-03-17'),
    (5, 'Capacitação em Elétrica Industrial', 0, '2050-01-01');

/* INCLUSÃO DE OS (11 REGISTROS) */
INSERT INTO OS (ID_REQUISITANTE, ID_OFICINA, ID_TECNICO, ID_EQUIPAMENTO, TIPO_OS, DESCRICAO, GRAU_PRIORIDADE, DATA_SOLICITACAO, DATA_CONCLUSAO, SITUACAO, COMENTARIOS)
VALUES
    (3, 1, NULL, NULL, 'Corretiva', 'Vazamento na tubulação de alimentação da caldeira.', 'Moderado', '2022-01-06', NULL, 'Aberta', NULL),
    (4, 2, 3, 1, 'Corretiva', 'Estouro no motor da bomba 2 da captação. Não está ligando.', 'Emergencial', '2022-06-06', '2022-06-06', 'Concluida', 'Substituida a placa controladora do motor.'),
    (1, 2, NULL, NULL, 'Corretiva', 'Lampada queimada no pátio da elevatória.', 'Baixa', '2022-06-08', NULL, 'Aberta', NULL),
    (1, 1, 2, 2, 'Preventiva', 'Manutenção preventiva na bomba 1 da elevatória taquaral.', 'Moderado', '2021-12-10', NULL, 'Aberta', 'Aguardando materiais para preventiva.'),
    (2, 1, NULL, 3, 'Preventiva', 'Manutenção preventiva no dosador de cloro do Reservatório Dic V', 'Emergencial', '2022-06-07', NULL, 'Aberta', NULL),
    (6, 2, 3, NULL, 'Corretiva', 'Lampada do banheiro femininino da captação está queimada.', 'Baixa', '2022-03-21', '2022-03-25', 'Concluida', 'O problema era no reator. Trocada a peça defeituosa'),
    (6, 2, 4, NULL, 'Corretiva', 'Verificar tomada do computador dos operadores da captação. Está sem energia.', 'Alta', '2020-05-18', '2020-05-18', 'Concluida', 'Disjuntor das tomadas da sala dos operadores da captação estava desarmado.'),
    (6, 1, 1, NULL, 'Corretiva', 'Vazamento embaixo da pia da copa da captação.', 'Moderado', '2019-11-02', NULL, 'Aberta', NULL),
    (4, 2, 3, 1, 'Preventiva', 'Manutenção preventiva no motor da bomba 2 da captação.', 'Alta', '2022-04-23', '2022-04-25', 'Concluida', 'Verificados terminais e lubrificado os rolamentos do eixo do motor'),
    (6, 2, 4, NULL, 'Preventiva', 'Manutenção preventiva nos quadros elétricos da captação.', 'Moderado', '2021-08-15', '2021-09-05', 'Concluida', 'Quadros limpos, terminais reapertados, leitura térmica dos componentes OK. Fase 1 do trifásico das bombas está aquecendo, importante observar o comportamento.'),
    (6, 2, 4, NULL, 'Preventiva', 'Manutenção preventiva nos quadros elétricos da captação.', 'Moderado', '2021-08-15', '2021-09-05', 'Concluida', 'Quadros limpos, terminais reapertados, leitura térmica dos componentes OK. Fase 1 do trifásico das bombas está aquecendo, importante observar o comportamento.');







/* READ (cRud) - CONSULTAS */

/* CONSULTAR TODAS AS OS ABERTAS DA OFICINA 'HIDRÁULICA' RETORNANDO AS INFORMAÇÕES ABAIXO */
-- NÚMERO DA OS
-- TIPO, MARCA E MODELO DO EQUIPAMENTO CONCATENADOS
-- NOME COMPLETO DO REQUISITANTE
-- DESCRIÇÃO
-- DATA DA SOLICITAÇÃO NO PADRÃO (DD/MM/YYY)
SELECT
    OS.ID_OS AS 'Nº OS',
    CONCAT(EQ.TIPO_EQUIPAMENTO, '/', EQ.FABRICANTE, '/', EQ.MODELO) AS 'EQUIPAMENTO',
    CONCAT(R.NOME, ' ', R.SOBRENOME) AS 'REQUISITANTE',
    OS.DESCRICAO AS 'DESCRIÇÃO DA OS',
    DATE_FORMAT(OS.DATA_SOLICITACAO, '%d/%m/%Y') AS 'DATA DA SOLICITAÇÃO'
FROM OS
    LEFT JOIN EQUIPAMENTO AS EQ 
        ON EQ.ID_EQUIPAMENTO = OS.ID_EQUIPAMENTO
    INNER JOIN REQUISITANTE AS R
        ON R.ID_REQUISITANTE = OS.ID_REQUISITANTE
    INNER JOIN OFICINA AS OF
        ON OF.ID_OFICINA = OS.ID_OFICINA
WHERE
    OS.SITUACAO = 'ABERTA'
    AND
    OF.NOME_OFICINA = 'HIDRAULICA'
ORDER BY
    OS.DATA_SOLICITACAO DESC;

/* LISTAR TODOS OS TÉCNICOS RETORNANDO AS INFORMAÇÕES ABAIXO */
-- NOME COMPLETO DO TÉCNICO
-- ESPECIALIDADE
-- OFICINA
-- SITUAÇÃO DO ASO (OK OU NÃO OK)
-- NR DE OS ATRIBUÍDAS (CONCLUÍDAS OU NÃO)
-- ORGANIZAR POR ORDEM ALFABÉTICA DOS NOMES DOS TÉCNICOS
SELECT
    CONCAT(TEC.NOME, ' ', TEC.SOBRENOME) AS 'TÉCNICO',
    ESP.NOME_ESPECIALIDADE AS 'ESPECIALIDADE',
    OF.NOME_OFICINA AS 'OFICINA',
    CASE
        WHEN ASO_OK = 1 THEN 'OK'
        WHEN ASO_OK = 0 THEN 'NÃO OK'
    END AS 'SITUAÇÃO DO ASO',
    COUNT(OS.ID_OS) AS 'QUANTIDADE DE OS ATRIBUÍDAS'
FROM TECNICO AS TEC
    INNER JOIN ESPECIALIDADE AS ESP
        ON ESP.ID_ESPECIALIDADE = TEC.ID_ESPECIALIDADE
    INNER JOIN OFICINA AS OF
        ON OF.ID_OFICINA = ESP.ID_OFICINA
    LEFT JOIN OS AS OS
        ON OS.ID_TECNICO = OS.ID_TECNICO
GROUP BY
    CONCAT(TEC.NOME, ' ', TEC.SOBRENOME)
ORDER BY
    CONCAT(TEC.NOME, ' ', TEC.SOBRENOME) ASC;

/* CONSULTAR OS SETORES E SUA QUANTIDADE DE OS LISTANDO AS INFORMAÇÕES ABAIXO */
-- NOME DO SETOR
-- QUANTIDADE DE OS DESSE SETOR
-- SE O SETOR É PRIORITÁRIO
SELECT
    S.NOME_SETOR AS 'SETOR',
    COUNT(OS.ID_OS) AS 'QUANTIDADE DE OS',
    CASE
      WHEN S.PRIORITARIO = 1 THEN 'SIM'
      WHEN S.PRIORITARIO = 0 THEN 'NÃO'
    END AS 'É PRIORITÁRIO'
FROM SETOR AS S
    INNER JOIN REQUISITANTE AS R
        ON R.ID_SETOR = S.ID_SETOR
    INNER JOIN OS
        ON OS.ID_REQUISITANTE = R.ID_REQUISITANTE
GROUP BY
  S.NOME_SETOR;

/* VERIFICAR SE HÁ BOMBAS SUBMERSÍVEIS ALOCADAS NO SETOR 'Reservatório DIC V' RETORNANDO AS INFORMAÇÕES ABAIXO */
-- ID DO EQUIPAMENTO
-- FABRICANTE DO EQUIPAMENTO
-- MODELO DO EQUIPAMENTO
-- OBS.: DEVE RETORNAR UMA CONSULTA VAZIA.
SELECT
    EQ.ID_EQUIPAMENTO AS 'ID DO EQUIPAMENTO',
    EQ.FABRICANTE AS 'FABRICANTE',
    EQ.MODELO AS 'MODELO'
FROM EQUIPAMENTO AS EQ
INNER JOIN OS
    ON OS.ID_EQUIPAMENTO = EQ.ID_EQUIPAMENTO
WHERE
    TIPO_EQUIPAMENTO = 'Bomba Submersível'
    AND
    OS.ID_REQUISITANTE = (
        SELECT
            R.ID_REQUISITANTE
        FROM REQUISITANTE AS R
        INNER JOIN SETOR AS S
            ON S.ID_SETOR = R.ID_SETOR
        WHERE
            S.NOME_SETOR = 'Reservatório Dic V');







/* UPDATES (crUd) - ALTERAÇÕES DE REGISTROS */

/* ATRIBUIR UM TÉCNICO PARA A EXECUÇÃO DAS  OS Nº 3 DA OFICINA DE ELÉTRICA */
UPDATE OS
SET
    ID_TECNICO = 3;
WHERE
    ID_OS = 3;


/* A OS Nº 5 FOI EXECUTADA E CONCLUÍDA PELO TÉCNICO 'JARBAS PEREIRA' NO DIA '08/06/2022'. FORAM SUBSTITUIDAS OS ANÉIS DE VEDAÇÃO DOS BICOS DE DOSAGEM. */
UPDATE OS
SET
    ID_TECNICO = (
        SELECT
            ID_TECNICO
        FROM TECNICO
        WHERE
            CONCAT(NOME, ' ', SOBRENOME) = 'JARBAS PEREIRA'),
    DATA_CONCLUSAO = '2022-06-08',
    COMENTARIOS = 'FORAM SUBSTITUIDAS OS ANÉIS DE VEDAÇÃO DOS BICOS DE DOSAGEM'
WHERE
    ID_OS = 5;


/* O DEPARTAMENTO DE RH DETERMINOU QUE A ESPECIALIDADE 'AJUDANTE DE ELETRICISTA' PASSARÁ A SE CHAMAR 'AUXILIAR DE ELÉTRICA', FAÇA AS ALTERAÇÕES NECESSÁRIAS */
UPDATE ESPECIALIDADE
SET
    NOME_ESPECIALIDADE = 'AUXILIAR DE ELÉTRICA'
WHERE
    NOME_ESPECIALIDADE = 'AJUDANTE DE ELETRICISTA';






/* DELETE (cruD) - EXCLUSÃO DE REGISTROS */

/* DEVIDO A UMA FALHA, FORAM GERADOS REGISTROS EM DUPLICIDADE DE UMA DAS OS. EXCLUA TODAS AS DUPLICIDADES GERADAS, MANTENDO O PRIMEIRO REGISTRO DA SOLICITAÇÃO */
DELETE FROM
    OS
WHERE
    ID_OS <> (
        SELECT
            ID_OS
        FROM OS
        WHERE
            DESCRICAO = (
                SELECT
                    DESCRICAO
                FROM OS
                GROUP BY
                    DESCRICAO
                HAVING
                    COUNT(DESCRICAO) > 1    
                )
            );



