import org.apache.log4j.Logger;

import javax.xml.transform.Result;
import java.sql.*;


public class Main {

    //LOGGER
    private static final Logger logger = Logger.getLogger(Main.class);

    //QUERIES
    private static final String sqlDropTable = """
            DROP TABLE IF EXISTS dentista;
            """;

    private static final String sqlCreateTable = """
            CREATE TABLE IF NOT EXISTS dentista (
            id INT NOT NULL PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            sobrenome VARCHAR(100) NOT NULL,
            matricula INT NOT NULL);         
            """;

    private static final String sqlInsert = """
            INSERT INTO dentista (id, nome, sobrenome, matricula)
            VALUES
            (1, 'Manoel', 'Gomes', 55418);
            """;

    private static final String sqlUpdate = """
            UPDATE dentista
            SET matricula=81541
            WHERE nome='Manoel' AND sobrenome='Gomes';
            """;

    private static final String sqlSelect = """
            SELECT *
            FROM dentista
            WHERE nome='Manoel' AND sobrenome='Gomes';
            """;


    public static void main(String[] args) throws Exception {

        Connection connection = null;

        try {
            connection = getConnection();
            Statement stm = connection.createStatement();

            //CRIAÇÃO DA TABELA E INSERÇÃO DE PRIMEIRO REGISTRO
            stm.execute(sqlDropTable);
            stm.execute(sqlCreateTable);
            stm.execute(sqlInsert);

            //VERIFICAÇÃO ANTES DO UPDATE
            ResultSet rs = stm.executeQuery(sqlSelect);
            resultSetIterationLog(rs);

            //ALTERAÇÃO DA MATRÍCULA
            stm.execute(sqlUpdate);

            //VERIFICAÇÃO APÓS O UPDATE
            rs = stm.executeQuery(sqlSelect);
            resultSetIterationLog(rs);

        } catch (Exception e) {
            logger.error(e);
        } finally {
            connection.close();
        }
    }

    public static Connection getConnection () throws Exception {
        Class.forName("org.h2.Driver").newInstance();
        return DriverManager.getConnection("jdbc:h2:~/aula13", "sa", "");
    }

    public static void resultSetIterationLog(ResultSet rs) throws SQLException {
        while (rs.next()) {
            logger.info("\n Id: " + rs.getInt(1) +
                    "\n Nome: " + rs.getString(2) +
                    "\n Sobrenome: " + rs.getString(3) +
                    "\n Matricula: " + rs.getInt(4));
        }
    }

}