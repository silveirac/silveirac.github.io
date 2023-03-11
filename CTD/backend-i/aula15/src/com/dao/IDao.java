package com.dao;

import java.util.List;

public interface IDao <T>{

    //METODOS
    T salvar(T t);

    T buscarPorId(int id);

    List<T> buscarTodos();

    void excluir (int id);

}
