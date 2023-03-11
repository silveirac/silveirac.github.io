import org.apache.log4j.Logger;

import java.sql.*;
import java.util.Arrays;

public class Main {

    private static final String sqlCreateTable = """
            DROP TABLE IF EXISTS funcionario;
            CREATE TABLE funcionario (
            id INT NOT NULL PRIMARY KEY,
            nome VARCHAR(100),
            sobrenome VARCHAR(100),
            salario DOUBLE,
            anos_de_servico INT
            );
            """;

    private static final String sqlInsert = "INSERT INTO funcionario (id, nome, sobrenome, salario, anos_de_servico)"
            + "VALUES"
            + "(1, 'Pablo', 'Haleson', 3500.00, 3);";
    private static final String sqlInsert2 = """
            INSERT INTO funcionario (id, nome, sobrenome, salario, anos_de_servico)
            VALUES
            (2, 'Iccaro', 'Oliveira', 9500.00, 10);
            """;

    private static final String sqlInsert3 = """
            INSERT INTO funcionario (id, nome, sobrenome, salario, anos_de_servico)
            VALUES
            (2, 'Darlei', 'Feix', 3500.00, 5);
            """;

    private static final String sqlUpdate = """
            UPDATE funcionario
            SET salario = 12000.00
            WHERE id=2;
            """;

    private static final String sqlSearch = """
            SELECT *
            FROM funcionario
            WHERE id=2;
            """;

    private static final String sqlSearchDeleteId = """
            SELECT *
            FROM funcionario
            WHERE id=1;
            """;

    private static final String sqlSearchDeleteNome = """
            SELECT *
            FROM funcionario
            WHERE nome='Iccaro';
            """;

    private static final String sqlDeleteId = """
            DELETE FROM funcionario
            WHERE id=1;
            """;

    private static final String sqlDeleteName = """
            DELETE FROM funcionario
            WHERE nome='Iccaro';
            """;

    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) throws SQLException {

        Connection connection = null;

        //CRIAÇÃO DA TABELA, EXECUÇÃO DO ERRO DE ID REPETIDO E INSERÇÃO DE DOIS REGISTROS ÍNTEGROS
        try {
            connection = getConnection();
            Statement statement = connection.createStatement();

            for (String instruction : Arrays.asList(sqlCreateTable, sqlInsert, sqlInsert2, sqlInsert3)) {
                try {
                    statement.execute(instruction);
                } catch (Exception e) {
                    logger.error(e);
                }
            }

        } catch (Exception e) {
            logger.error(e);

        }

        //UPDATE DE UM REGISTRO (SALÁRIO)
        try {
            Statement statement = connection.createStatement();

            ResultSet rs = statement.executeQuery(sqlSearch);
            while (rs.next()) {logger.debug(rs.getString(1)
                    + " | " + rs.getString(2)
                    + " | " + rs.getString(3)
                    + " | " + rs.getString(4)
                    + " | " + rs.getString(5));
            }

            statement.execute(sqlUpdate);

            rs = statement.executeQuery(sqlSearch);
            while (rs.next()) {
                logger.debug(rs.getString(1)
                        + " | " + rs.getString(2)
                        + " | " + rs.getString(3)
                        + " | " + rs.getString(4)
                        + " | " + rs.getString(5));
            }

        } catch (Exception e) {
            logger.error(e);
        }

        //EXCLUSÃO DE FUNCIONÁRIO POR ID
        try {
            Statement statement = connection.createStatement();

            ResultSet rs = statement.executeQuery(sqlSearchDeleteId);
            while (rs.next()) {logger.info("EXCLUSÃO DE REGISTRO DO FUNCIONÁRIO: "
                    + rs.getString(1)
                    + " | " + rs.getString(2)
                    + " | " + rs.getString(3)
                    + " | " + rs.getString(4)
                    + " | " + rs.getString(5));
            }

            statement.execute(sqlDeleteId);
        } catch (Exception e) {
            logger.error(e);
        }

        //EXCLUSÃO DE FUNCIONÁRIO POR NOME
        try {
            Statement statement = connection.createStatement();

            ResultSet rs = statement.executeQuery(sqlSearchDeleteNome);
            while (rs.next()) {logger.info("EXCLUSÃO DE REGISTRO DO FUNCIONÁRIO: "
                    + rs.getString(1)
                    + " | " + rs.getString(2)
                    + " | " + rs.getString(3)
                    + " | " + rs.getString(4)
                    + " | " + rs.getString(5));
            }

            statement.execute(sqlDeleteName);
        } catch (Exception e) {
            logger.error(e);
        }
        connection.close();
    }

    public static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver").newInstance();
        return DriverManager.getConnection("jdbc:h2:~/aula12", "sa", "");
    }
}
