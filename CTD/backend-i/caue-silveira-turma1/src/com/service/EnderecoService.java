package com.service;

import com.dao.impl.EnderecoDao;
import com.model.Endereco;

import java.sql.SQLException;

public class EnderecoService {

    //ATRIBUTOS
    private EnderecoDao enderecoDao;

    //CONSTRUTOR
    public EnderecoService(EnderecoDao enderecoDao) {
        this.enderecoDao = enderecoDao;
    }

    //METODOS
    public Endereco salvar(Endereco endereco) throws SQLException {
        return enderecoDao.salvar(endereco);
    }
}
