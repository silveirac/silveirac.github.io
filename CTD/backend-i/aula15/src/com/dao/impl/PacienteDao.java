package com.dao.impl;

import com.config.ConfiguracaoJDBC;
import com.dao.IDao;
import com.model.Endereco;
import com.model.Paciente;
import com.util.Util;
import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PacienteDao implements IDao <Paciente> {

    //ATRIBUTOS
    private ConfiguracaoJDBC configuracaoJDBC;
    private static final Logger logger = Logger.getLogger(EnderecoDao.class);

    //CONSTRUTORES
    public PacienteDao() {
        this.configuracaoJDBC = new ConfiguracaoJDBC();
    }

    @Override
    public Paciente salvar(Paciente paciente) {

        //REALIZAR CONEXÃO COM DB
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();

        //CRIAÇÃO DE STATEMENT E QUERY
        Statement stm = null;
        String query = String.format ("INSERT INTO paciente (nome, sobrenome, rg, data_nascimento, endereco_id) VALUES ('%s', '%s', '%s', '%s', %s);",
                paciente.getNome(), paciente.getSobrenome(), paciente.getRg(), Util.dateToTimestamp(paciente.getDataNascimento()), paciente.getEndereco().getId());

        try {
            logger.debug("Salvando novo paciente: " + paciente.toString());

            stm = connection.createStatement();
            stm.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet rs = stm.getGeneratedKeys();

            if (rs.next())
                paciente.setId(rs.getInt(1));
            stm.close();
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return paciente;
    }

    @Override
    public Paciente buscarPorId(int id) {

        //REALIZAR CONEXÃO COM DB
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();

        //CRIAÇÃO DE STATEMENT E QUERY
        Statement stm = null;
        String query = String.format ("SELECT * FROM paciente WHERE id=%s", id);
        Paciente paciente = null;

        try {
            logger.debug("Buscando paciente...");
            stm = connection.createStatement();
            ResultSet rs = stm.executeQuery(query);

            while (rs.next()) {
                paciente = geraPaciente(rs);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return paciente;
    }

    @Override
    public List<Paciente> buscarTodos() {

        //REALIZAR CONEXÃO COM DB
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();

        //CRIAÇÃO DE STATEMENT E QUERY
        Statement stm = null;
        String query = "SELECT * FROM paciente";

        //CRIAÇÃO DA LISTA QUE RECEBERÁ OS ENDEREÇOS
        List<Paciente> pacientesList = new ArrayList<>();

        try {
            logger.debug("Buscando pacientes cadastrados...");

            stm = connection.createStatement();
            ResultSet rs = stm.executeQuery(query);

            while (rs.next()) {
                pacientesList.add(geraPaciente(rs));
            }

            stm.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return pacientesList;
    }

    @Override
    public void excluir(int id) {
        //REALIZAR CONEXÃO COM DB
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();

        //CRIAÇÃO DE STATEMENT E QUERY
        Statement stm = null;
        String query = String.format ("DELETE FROM paciente WHERE id=%s", id);

        try {
            logger.debug("Excluindo paciente...");
            stm = connection.createStatement();
            stm.execute(query);
            stm.close();
            connection.close();            
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Paciente geraPaciente (ResultSet rs) throws SQLException {
        EnderecoDao enderecoDao = new EnderecoDao();

        int id = rs.getInt("id");
        String nome = rs.getString("nome");
        String sobrenome = rs.getString("sobrenome");
        String rg = rs.getString("rg");
        Date dataNascimento = rs.getDate("data_nascimento");
        Endereco endereco = enderecoDao.buscarPorId(rs.getInt("endereco_id"));

        return new Paciente(id, nome, sobrenome, rg, dataNascimento, endereco);
    }
}
