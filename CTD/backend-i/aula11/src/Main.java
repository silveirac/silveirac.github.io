import java.sql.*;

public class Main {
    public static void main(String[] args) {
        Connection connection = null;

        try {
            connection = getConnection();
            Statement stm = connection.createStatement();

            stm.execute(sqlDropTable);
            stm.execute(sqlCreateTable);
            stm.execute(sqlInsertCirculo);
            stm.execute(sqlInsertTriangulo);

            ResultSet rs = stm.executeQuery(sqlSelectAllFromFigura);

            while (rs.next()) {
                FiguraDB f = null;
                int id = rs.getInt(1);
                String tipo = rs.getString(2);
                String cor = rs.getString(3);

                if (f == null) {
                    f = new FiguraDB(id, tipo, cor);

                } else {
                    f.setId(id);
                    f.setTipo(tipo);
                    f.setTipo(cor);

                }
                System.out.println(f);

            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    private static final String sqlDropTable = "DROP TABLE IF EXISTS figura;";
    private static final String sqlCreateTable = """
            CREATE TABLE figura (
            id INT NOT NULL PRIMARY KEY,
            tipo VARCHAR(100) NOT NULL,
            cor VARCHAR(100) NOT NULL);
            """;
    private static final String sqlInsertCirculo = """
            INSERT INTO figura (id, tipo, cor)
            VALUES
            (1, 'Círculo', 'Branco'),
            (2, 'Círculo', 'Preto');
            """;

    private static final String sqlInsertTriangulo = """
            INSERT INTO figura (id, tipo, cor)
            VALUES
            (3, 'Triângulo', 'Azul'),
            (4, 'Triângulo', 'Vermelho'),
            (5, 'Triângulo', 'Verde');
            """;

    private static final String sqlSelectAllFromFigura = """
            SELECT *
            FROM figura;
            """;



    public static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver").newInstance();
        return DriverManager.getConnection("jdbc:h2:~/aula11", "sa", "");
    }
}