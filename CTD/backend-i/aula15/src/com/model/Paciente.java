package com.model;

import java.util.Date;

public class Paciente {

    //ATRIBUTOS
    private int id;
    private String nome;
    private String sobrenome;
    private String rg;
    private Date dataNascimento;
    private Endereco endereco;

    //CONSTRUTORES
    public Paciente(int id, String nome, String sobrenome, String rg, Date dataNascimento, Endereco endereco) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
    }

    public Paciente(String nome, String sobrenome, String rg, Date dataNascimento, Endereco endereco) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
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

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
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
        return "Paciente{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", rg='" + rg + '\'' +
                ", dataNascimento=" + dataNascimento +
                ", endereco=" + endereco +
                '}';
    }
}
