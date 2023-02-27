package model;

import java.time.LocalDate;

public class Hotel {

    //ATRIBUTOS
    private String nome;
    private LocalDate dataEntrada;
    private LocalDate dataSaida;
    private String cidade;

    //CONSTRUTOR
    public Hotel(String nome, LocalDate dataEntrada, LocalDate dataSaida, String cidade) {
        this.nome = nome;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
        this.cidade = cidade;
    }

    //GETTERS & SETTERS
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataEntrada() {
        return dataEntrada;
    }

    public void setDataEntrada(LocalDate dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    public LocalDate getDataSaida() {
        return dataSaida;
    }

    public void setDataSaida(LocalDate dataSaida) {
        this.dataSaida = dataSaida;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
}
