package com.model;

public class FilialHotel {

    //ATRIBUTOS
    private int id;
    private String nomeFilial;
    private boolean isCincoEstrelas;
    private Endereco endereco;

    //CONSTRUTOR
    public FilialHotel(int id, String nomeFilial, boolean isCincoEstrelas, Endereco endereco) {
        this.id = id;
        this.nomeFilial = nomeFilial;
        this.isCincoEstrelas = isCincoEstrelas;
        this.endereco = endereco;
    }

    public FilialHotel(String nomeFilial, boolean isCincoEstrelas, Endereco endereco) {
        this.nomeFilial = nomeFilial;
        this.isCincoEstrelas = isCincoEstrelas;
        this.endereco = endereco;
    }

    //GETTERS & SETTERS
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeFilial() {
        return nomeFilial;
    }

    public void setNomeFilial(String nomeFilial) {
        this.nomeFilial = nomeFilial;
    }

    public boolean isCincoEstrelas() {
        return isCincoEstrelas;
    }

    public void setCincoEstrelas(boolean cincoEstrelas) {
        isCincoEstrelas = cincoEstrelas;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    //TO STRING
    @Override
    public String toString() {
        return "FilialHotel{" +
                "id=" + id +
                ", nomeFilial='" + nomeFilial + '\'' +
                ", isCincoEstrelas=" + isCincoEstrelas +
                ", endereco=" + endereco +
                '}';
    }
}
