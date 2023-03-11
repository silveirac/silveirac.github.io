package com.dao.impl;

import com.config.ConfiguracaoJDBC;
import com.dao.IDao;
import com.model.Endereco;
import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class EnderecoDao implements IDao<Endereco> {

    //VARIAVEL DE CONFIGURAÇÃO DE CONEXÃO COM DB
    private ConfiguracaoJDBC configuracaoJDBC;

    //INSTANCIA DO LOGGER
    private static final Logger logger = Logger.getLogger(EnderecoDao.class);

    //CONSTRUTOR
    public EnderecoDao() {
        this.configuracaoJDBC = new ConfiguracaoJDBC();
    }

    //METODOS
    @Override
    public Endereco salvar(Endereco endereco) throws SQLException { //SALVA REGISTRO DE ENDEREÇO
        logger.debug("Cadastrando endereço: " + endereco.toString());

        //CONEXÃO COM DB
        Connection connection = configuracaoJDBC.getConnection();

        //STATEMENT E QUERIES
        Statement stm = null;
        String query = String.format("INSERT INTO endereco (rua, numero, cidade, estado) VALUES ('%s', '%s', '%s', '%s');",
                endereco.getRua(), endereco.getNumero(), endereco.getCidade(), endereco.getEstado());

        //EXECUCAO DE QUERY
        try {
           stm = connection.createStatement();
           stm.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
           ResultSet rs = stm.getGeneratedKeys();

           if (rs.next())
               endereco.setId(rs.getInt(1));

            logger.debug("Cadastrando endereço: " + endereco.toString());

        } catch (SQLException e) {
            e.printStackTrace();

        } finally {
            stm.close();
            connection.close();

        }
            return endereco;
    }
}
