-- MESA DE TRABALHO | AULA 20 | BANCO DE DADDOS I | 14/06/2022

-- INTEGRANTES | EQUIPE 2
-- BRAULIO PORTELA
-- CAUÊ SILVEIRA
-- IVANALDO SANTOS
-- JOSI SANTOS
-- RAFAEL VARELA

-- 4 Faça uma procedure para a leitura de duas notas parciais de um aluno.  
-- A mesma deve retornar a mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;
-- A mesma deve retornar a mensagem “Aprovado com Distinção”, se a média for igual a dez;
-- A mesma deve retornar a mensagem “Reprovado” se a média for menor de do que sete;

DELIMITER $$
CREATE PROCEDURE SP_APROVADO_REPROVADO(
	IN NOTA1 INT,
    IN NOTA2 INT,
    OUT APROVADOREPROVADO VARCHAR(255)
)
BEGIN
	DECLARE MEDIA DOUBLE;
    SET MEDIA = (NOTA1 + NOTA2) / 2;
    CASE
		WHEN MEDIA = 10 THEN SET APROVADOREPROVADO = 'Aprovado com Distinção';
        WHEN MEDIA >= 7 THEN SET APROVADOREPROVADO = 'Aprovado';
        WHEN MEDIA < 7 THEN SET APROVADOREPROVADO = 'Reprovado';
	END CASE;
END $$

CALL SP_APROVADO_REPROVADO(9, 10, @APROVADOREPROVADO);
SELECT @APROVADOREPROVADO;