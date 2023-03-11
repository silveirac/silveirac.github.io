import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Main {
    public static void main3(String[] args) {

        Connection connection = null;

        try {
            connection = getConnection();

            Statement statement = connection.createStatement();
            statement.execute(sqlDropTable);
            statement.execute(sqlCreateTable);
            statement.execute(sqlInsert);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    private static final String sqlDropTable = "DROP TABLE IF EXISTS ANIMAL;";
    private static final String sqlCreateTable = """
            CREATE TABLE ANIMAL
            (ID INT PRIMARY KEY,
            NOME VARCHAR(100) NOT NULL,
            TIPO VARCHAR(100) NOT NULL);
            """;

    private static final String sqlInsert = """
            INSERT INTO ANIMAL (ID, NOME, TIPO)
            VALUES
            (1, 'Cachorro', 'Cachorro'),
            (2, 'Gato', 'Gato'),
            (3, 'Papagaio', 'Papagaio'),
            (4, 'Cachorro', 'Cachorro'),
            (5, 'Gato', 'Gato'),
            (6, 'Papagaio', 'Papagaio');
            """;




    public static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver").newInstance();
        return DriverManager.getConnection("jdbc:h2:~/test", "sa", "");
    }
}