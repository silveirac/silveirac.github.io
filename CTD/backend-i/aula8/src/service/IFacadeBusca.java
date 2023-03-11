package service;

import java.time.LocalDate;

public interface IFacadeBusca {

    //METODOS
    String busca(String cidade, LocalDate dataPartida, LocalDate dataRetorno);

}
