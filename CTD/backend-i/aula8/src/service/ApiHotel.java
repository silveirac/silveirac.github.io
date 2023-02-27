package service;

import model.Hotel;

import java.time.LocalDate;
import java.util.ArrayList;

public class ApiHotel {

    //ATRIBUTOS
    private ArrayList<Hotel> hoteis;

    //CONSTRUTOR
    public ApiHotel() {
        this.hoteis = new ArrayList<>();
    }

    //METODOS
    public void busca(LocalDate dataEntrada, LocalDate dataSaida, String cidade) {
        int counter = 0;
        for (Hotel h : hoteis) {
            if (h.getCidade().equalsIgnoreCase(cidade)) {
                if (dataEntrada.isEqual(h.getDataEntrada()) || dataEntrada.isAfter(h.getDataEntrada())) {
                    if (dataSaida.isEqual(h.getDataSaida()) || dataEntrada.isBefore(h.getDataSaida())) {
                        System.out.println(h.getNome() + " | de " + dataEntrada + " a " + dataSaida);
                        counter++;
                    }
                }
            }
        }
        if (counter == 0) {
            System.out.println("Nenhuma reserva disponível para os parâmetros definidos!");
        }
    }

    public void addDisponibilidadeHotel (String nome, LocalDate dataEntrada, LocalDate dataSaida, String cidade) {
        hoteis.add(new Hotel(nome, dataEntrada, dataSaida, cidade));
        System.out.println("Disponibilidade de reserva de hotel cadastrada.");
    }

}
