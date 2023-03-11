package com.service;

import com.dao.impl.FilialHotelDao;
import com.model.FilialHotel;

import java.sql.SQLException;

public class FilialHotelService {

    //ATRIBUTOS
    private FilialHotelDao filialHotelDao;

    //CONSTRUTOR
    public FilialHotelService(FilialHotelDao filialHotelDao) {
        this.filialHotelDao = filialHotelDao;
    }

    //METODOS
    public FilialHotel salvar (FilialHotel filialHotel) throws SQLException {
        return filialHotelDao.salvar(filialHotel);
    }
}
