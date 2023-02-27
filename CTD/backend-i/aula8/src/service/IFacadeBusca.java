package service;

import java.time.LocalDate;

public interface IFacadeBusca {

    //METODOS
    void busca(String cidade, LocalDate dataPartida, LocalDate dataretorno);

}
