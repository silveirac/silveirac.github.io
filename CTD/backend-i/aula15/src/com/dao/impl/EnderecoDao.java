package com.dao.impl;

import com.config.ConfiguracaoJDBC;
import com.dao.IDao;
import com.model.Endereco;
import org.apache.log4j.Logger;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class EnderecoDao implements IDao<Endereco> {

    //ATRIBUTOS
    private ConfiguracaoJDBC configuracaoJDBC;
    private static final Logger logger = Logger.getLogger(EnderecoDao.class);

    //CONSTRUTORES
    public EnderecoDao() {
        this.configuracaoJDBC = new ConfiguracaoJDBC();
    }

    //METODOS
    @Override
    public Endereco salvar(Endereco endereco) {

        //REALIZAR CONEXÃO COM DB
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();

        //CRIAÇÃO DE STATEMENT E QUERY
        Statement stm = null;
        String query = String.format("""
                INSERT INTO endereco (rua, numero, cidade, bairro)
                VALUES
                    ('%s', '%s', '%s', '%s')
                """, endereco.getRua(), endereco.getNumero(), endereco.getCidade(), endereco.getBairro());

        //EXECUÇÃO DA QUERY
        try {
            stm = connection.createStatement();

            logger.debug("Salvando novo endereço: " + endereco.toString());

            stm.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet rs = stm.getGeneratedKeys();

            if (rs.next())
                endereco.setId(rs.getInt(1));

            connection.close();
            stm.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            return endereco;
        }
    }

    @Override
    public Endereco buscarPorId(int id) {

        //REALIZAR CONEXÃO COM DB
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();

        //CRIAÇÃO DE STATEMENT E QUERY
        Statement stm = null;
        String query = String.format ("SELECT * FROM endereco WHERE id=%s", id);
        Endereco endereco = null;

        try {
           //logger.debug("Buscando endereço...");
            stm = connection.createStatement();
            ResultSet rs = stm.executeQuery(query);

            while (rs.next()) {
                endereco = geraEndereco(rs);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return endereco;
    }

    @Override
    public List<Endereco> buscarTodos() {

        //REALIZAR CONEXÃO COM DB
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();

        //CRIAÇÃO DE STATEMENT E QUERY
        Statement stm = null;
        String query = "SELECT * FROM endereco";

        //CRIAÇÃO DA LISTA QUE RECEBERÁ OS ENDEREÇOS
        List<Endereco> enderecosList = new ArrayList<>();

        try {
            logger.debug("Buscando endereços cadastrados...");

            stm = connection.createStatement();
            ResultSet rs = stm.executeQuery(query);

            while (rs.next()) {
                enderecosList.add(geraEndereco(rs));
            }

            stm.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return enderecosList;
    }

    @Override
    public void excluir(int id) {

        //REALIZAR CONEXÃO COM DB
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();

        //CRIAÇÃO DE STATEMENT E QUERY
        Statement stm = null;
        String query = String.format ("DELETE FROM endereco WHERE id=%s", id);

        try {
            logger.debug("Excluindo endereço...");

            stm = connection.createStatement();
            stm.execute(query);
            stm.close();
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }



    }

    public Endereco geraEndereco (ResultSet rs) throws SQLException {
        int id = rs.getInt("id");
        String rua = rs.getString("rua");
        String numero = rs.getString("numero");
        String cidade = rs.getString("cidade");
        String bairro = rs.getString("bairro");

        return new Endereco(id, rua, numero, cidade, bairro);
    }
}
