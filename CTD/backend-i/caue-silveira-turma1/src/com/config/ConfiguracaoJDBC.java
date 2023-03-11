package com.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConfiguracaoJDBC {
    private String jdbcDriver;
    private String dbUrl;
    private String usuario;
    private String senha;

    public ConfiguracaoJDBC() {
        this.jdbcDriver = "org.h2.Driver";
        this.dbUrl = "jdbc:h2:mem:aula17_avaliacao;DB_CLOSE_DELAY=-1;INIT=RUNSCRIPT FROM 'create.sql'";
        this.usuario = "sa";
        this.senha = "";
    }

    public Connection getConnection() {
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(dbUrl, usuario, senha);
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            return connection;
        }
    }

}
