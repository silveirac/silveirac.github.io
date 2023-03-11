package com.dao;

import java.sql.SQLException;

public interface IDao <T>{

    T salvar(T t) throws SQLException;

}
