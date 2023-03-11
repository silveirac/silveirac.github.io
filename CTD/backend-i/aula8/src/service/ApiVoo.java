package service;

import model.Hotel;
import model.Voo;

import java.time.LocalDate;
import java.util.ArrayList;

public class ApiVoo implements IFacadeBusca{

    //ATRIBUTOS
    private ArrayList<Voo> voos;

    //CONSTRUTOR
    public ApiVoo() {
        this.voos = new ArrayList<>();
    }

    //METODOS
    @Override
    public String busca(String cidade, LocalDate dataPartida, LocalDate dataRetorno) {
        int counter = 0;
        for (Voo v : voos) {
            if (v.getDestino().equalsIgnoreCase(cidade)) {
                if (dataPartida.isEqual(v.getDataPartida()) || dataPartida.isAfter(v.getDataPartida())) {
                    if (dataRetorno.isEqual(v.getDataRetorno()) || dataPartida.isBefore(v.getDataRetorno())) {
                        System.out.println(v.getCompanhia() + " | " + v.getOrigem() + " -> " + v.getDestino() + " | partida em " + dataPartida + " com retorno em " + dataRetorno);
                        counter++;
                    }
                }
            }
        }
        if (counter == 0) {
            return null;
        } else {
            return "Não há mais voos por aqui!";
        }
    }

    public void addDisponibilidadeVoo (String companhia, LocalDate dataPartida, LocalDate dataRetorno, String origem, String destino) {
        voos.add(new Voo(companhia, dataPartida, dataRetorno, origem, destino));
        System.out.println("Disponibilidade de voo cadastrada.");
    }


}
