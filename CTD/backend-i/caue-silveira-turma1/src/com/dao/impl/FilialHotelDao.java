package com.dao.impl;

import com.config.ConfiguracaoJDBC;
import com.dao.IDao;
import com.model.Endereco;
import com.model.FilialHotel;
import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class FilialHotelDao implements IDao<FilialHotel> {

    //VARIAVEL DE CONFIGURAÇÃO DE CONEXÃO COM DB
    private ConfiguracaoJDBC configuracaoJDBC;

    //INSTANCIA DO LOGGER
    private static final Logger logger = Logger.getLogger(FilialHotelDao.class);

    //CONSTRUTOR
    public FilialHotelDao() {
        this.configuracaoJDBC = new ConfiguracaoJDBC();
    }

    //METODOS
    @Override
    public FilialHotel salvar(FilialHotel filialHotel) throws SQLException {
        logger.debug("Cadastrando endereço: " + filialHotel.toString());

        //CONEXÃO COM DB
        Connection connection = configuracaoJDBC.getConnection();

        //STATEMENT E QUERIES
        Statement stm = null;
        String query = String.format("INSERT INTO filial (nome_filial, cinco_estrelas, endereco_id) VALUES ('%s', %s, %s);",
                filialHotel.getNomeFilial(), tratarCincoEstrelas(filialHotel), filialHotel.getEndereco().getId());

        //EXECUCAO DE QUERY
        try {
            stm = connection.createStatement();
            stm.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet rs = stm.getGeneratedKeys();

            if(rs.next())
                filialHotel.setId(rs.getInt(1));

            logger.debug("Cadastrando filial: " + filialHotel.toString());

        } catch (SQLException e) {
            e.printStackTrace();

        } finally {
            stm.close();
            connection.close();

        }

        return filialHotel;
    }

    private int tratarCincoEstrelas(FilialHotel filialHotel) {
        if (filialHotel.isCincoEstrelas()) {
            return 1;
        } else {
            return 0;
        }

    }
}
