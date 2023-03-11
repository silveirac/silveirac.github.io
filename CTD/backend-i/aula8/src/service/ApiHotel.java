package service;

import model.Hotel;

import java.time.LocalDate;
import java.util.ArrayList;

public class ApiHotel implements IFacadeBusca {

    //ATRIBUTOS
    private ArrayList<Hotel> hoteis;

    //CONSTRUTOR
    public ApiHotel() {
        this.hoteis = new ArrayList<>();
    }

    //METODOS
    @Override
    public String busca(String cidade, LocalDate dataPartida, LocalDate dataRetorno) {
        int counter = 0;
        for (Hotel h : hoteis) {
            if (h.getCidade().equalsIgnoreCase(cidade)) {
                if (dataPartida.isEqual(h.getDataEntrada()) || dataPartida.isAfter(h.getDataEntrada())) {
                    if (dataRetorno.isEqual(h.getDataSaida()) || dataPartida.isBefore(h.getDataSaida())) {
                        System.out.println(h.getNome() + " | de " + dataPartida + " a " + dataRetorno);
                        counter++;
                    }
                }
            }
        }
        if (counter == 0) {
            return null;
        } else {
            return "Não há mais estadias por aqui!";
        }
    }

    public void addDisponibilidadeHotel (String nome, LocalDate dataEntrada, LocalDate dataSaida, String cidade) {
        hoteis.add(new Hotel(nome, dataEntrada, dataSaida, cidade));
        System.out.println("Disponibilidade de reserva de hotel cadastrada.");
    }

}
