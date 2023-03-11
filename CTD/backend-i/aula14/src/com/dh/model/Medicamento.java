package com.dh.model;

public class Medicamento {

    //ATRIBUTOS
    private int id;
    private String nome;
    private String laboratório;
    private Integer quantidade;
    private double preco;

    //CONSTRUTORES
    public Medicamento(int id, String nome, String laboratório, Integer quantidade, double preco) {
        this.id = id;
        this.nome = nome;
        this.laboratório = laboratório;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    public Medicamento(String nome, String laboratório, Integer quantidade, double preco) {
        this.nome = nome;
        this.laboratório = laboratório;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    //GETTERS & SETTERS
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLaboratório() {
        return laboratório;
    }

    public void setLaboratório(String laboratório) {
        this.laboratório = laboratório;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    @Override
    public String toString() {
        return "Medicamento{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", laboratório='" + laboratório + '\'' +
                ", quantidade=" + quantidade +
                ", preco=" + preco +
                '}';
    }
}
