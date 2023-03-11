package service;

import service.ApiHotel;
import service.ApiVoo;
import service.IFacadeBusca;

import java.time.LocalDate;

public class BuscaFacade implements IFacadeBusca {

    public final ApiHotel h;
    public final ApiVoo v;

    public BuscaFacade() {
        this.h = new ApiHotel();
        this.v = new ApiVoo();
    }

    @Override
    public String busca(String cidade, LocalDate dataPartida, LocalDate dataRetorno) {
        String buscaVoo = v.busca(cidade, dataPartida, dataRetorno);
        String buscaHotel = h.busca(cidade, dataPartida, dataRetorno);

        if (buscaVoo.equals(null) || buscaHotel.equals(null)) {
            return "Nenhum voo e/ou hotel disponível para a cidade ou datas deseajadas!";
        } else {
            return null;
        }

    }
}
