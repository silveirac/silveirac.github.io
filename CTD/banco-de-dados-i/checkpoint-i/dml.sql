-- INTEGRANTES --

-- CAIRO OLIVEIRA
-- CAUÊ SILVEIRA
-- JOÃO NISHIMURA
-- RAFAEL VARELA


-- INSERT

INSERT INTO ASSOCIADOS (RG, NOME, SOBRENOME, ENDERECO, CIDADE, ESTADO)
VALUES 
(1234567, "CAIRO", "OLIVEIRA", "RUA 15 DE ABRIL", "SÃO PAULO", "SP"),
(1234567, "CAIRO", "OLIVEIRA", "RUA 15 DE ABRIL", "SÃO PAULO", "SP"),
(1234567, "CAIRO", "OLIVEIRA", "RUA 15 DE ABRIL", "SÃO PAULO", "SP"),
(1234567, "CAIRO", "OLIVEIRA", "RUA 15 DE ABRIL", "SÃO PAULO", "SP"),
(1234567, "CAIRO", "OLIVEIRA", "RUA 15 DE ABRIL", "SÃO PAULO", "SP");


INSERT INTO TELEFONES (TELEFONE_ASSOCIADO, ID_ASSOCIADO)
VALUES
("(11) 555-444-333", 1),
("(11) 555-444-333", 1),
("(11) 555-444-333", 2),
("(11) 555-444-333", 2),
("(11) 555-444-333", 3),
("(11) 555-444-333", 3),
("(11) 555-444-333", 4),
("(11) 555-444-333", 5);


INSERT INTO AUTORES (NOME, SOBRENOME)
VALUES
("MACHADO", "DE ASSIS");


INSERT INTO EDITORAS (RAZAO_SOCIAL, TELEFONE)
VALUES
("EDITORA DH1", "(11) 555-444-333"),
("EDITORA DH2", "(11) 555-444-333"),
("EDITORA DH3", "(11) 555-444-333");

INSERT INTO LIVROS (COD_ISBN, TITULO, ANO_CRIACAO, ID_AUTOR, ANO_PUBLICACAO, ID_EDITORA)
VALUES
(12345, "Lorem ipsum", 2021, 1, 2022, 1),
(12345, "Lorem ipsum", 2021, 1, 2022, 1),
(12345, "Lorem ipsum", 2021, 1, 2022, 2),
(12345, "Lorem ipsum", 2021, 1, 2022, 2),
(12345, "Lorem ipsum", 2021, 1, 2022, 3);

INSERT INTO EXEMPLARES (ID_LIVRO, SINISTRO)
VALUES
(1, 0),
(2, 1),
(3, 0),
(4, 0),
(5, 0);

INSERT INTO EMPRESTIMOS (ID_ASSOCIADO, DATA_EMPRESTIMO, PRAZO_DEVOLUCAO, DATA_DEVOLUCAO)
VALUES
(2, 09/05/2022, 16/05/2022, 19/05/2022),
(3, 09/05/2022, 16/05/2022, 19/05/2022),
(5, 09/05/2022, 16/05/2022, 19/05/2022);

INSERT INTO EMPRESTIMO_EXEMPLARES (ID_EMPRESTIMO, ID_EXEMPLAR)
VALUES
(1, 1),
(2, 1),
(3, 4);


-- DELETE

DELETE FROM ASSOCIADOS
WHERE ID_ASSOCIADO = 1;

DELETE FROM LIVROS
WHERE ID_LIVRO = 1;


-- UPDATE

UPDATE ASSOCIADOS
SET ENDERECO = "Rua das Flores, 860"
WHERE ID_ASSOCIADO = 3