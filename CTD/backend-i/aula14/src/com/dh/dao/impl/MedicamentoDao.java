package com.dh.dao.impl;

import com.dh.config.ConfiguracaoJDBC;
import com.dh.dao.IDao;
import com.dh.model.Medicamento;
import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MedicamentoDao implements IDao<Medicamento> {

    private ConfiguracaoJDBC configuracaoJDBC;
    private final static Logger logger = Logger.getLogger(MedicamentoDao.class);

    public MedicamentoDao(ConfiguracaoJDBC configuracaoJDBC) {
        this.configuracaoJDBC = configuracaoJDBC;
    }

    @Override
    public Medicamento salvar(Medicamento medicamento) throws Exception {
        logger.debug("Registrando medicamento novo: " + medicamento.toString());
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String query = String.format("INSERT INTO medicamentos (nome, laboratorio, quantidade, preco) VALUES ('%s', '%s', '%s', '%s')",
                medicamento.getNome(), medicamento.getLaboratório(), medicamento.getQuantidade(), medicamento. getPreco());

        try {
            statement = connection.createStatement();
            statement.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet generatedKeys = statement.getGeneratedKeys();

            if (generatedKeys.next()) {
                medicamento.setId(generatedKeys.getInt(1));
                statement.close();

            }

        } catch (SQLException e) {
            e.printStackTrace();

        } finally {
            connection.close();
            return medicamento;
        }
    }
}