package model;

import java.time.LocalDate;

public class Voo {
    //ATRIBUTOS
    private String companhia;
    private LocalDate dataPartida;
    private LocalDate dataRetorno;
    private String origem;
    private String destino;

    //CONSTRUTOR
    public Voo(String companhia, LocalDate dataPartida, LocalDate dataRetorno, String origem, String destino) {
        this.companhia = companhia;
        this.dataPartida = dataPartida;
        this.dataRetorno = dataRetorno;
        this.origem = origem;
        this.destino = destino;
    }

    //GETTERS & SETTERS
    public String getCompanhia() {
        return companhia;
    }

    public void setCompanhia(String companhia) {
        this.companhia = companhia;
    }

    public LocalDate getDataPartida() {
        return dataPartida;
    }

    public void setDataPartida(LocalDate dataPartida) {
        this.dataPartida = dataPartida;
    }

    public LocalDate getDataRetorno() {
        return dataRetorno;
    }

    public void setDataRetorno(LocalDate dataRetorno) {
        this.dataRetorno = dataRetorno;
    }

    public String getOrigem() {
        return origem;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }
}
