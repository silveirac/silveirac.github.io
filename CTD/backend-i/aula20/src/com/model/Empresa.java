package com.model;

import java.io.Serializable;
import java.util.ArrayList;

public class Empresa implements Serializable {

    //ATRIBUTOS
    private String cnpj;
    private String razaoSocial;

    private ArrayList<Funcionario> funcionarios;

    //CONSTRUTORES
    public Empresa(String cnpj, String razaoSocial) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.funcionarios = new ArrayList<>();
    }

    //GETTERS & SETTERS
    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public ArrayList<Funcionario> getFuncionarios() {
        return funcionarios;
    }

    public void setFuncionarios(ArrayList<Funcionario> funcionarios) {
        this.funcionarios = funcionarios;
    }

    //METODOS
    public Funcionario addFuncionario(Funcionario f) {
        funcionarios.add(f);
        return f;
    }

    @Override
    public String toString() {
        return "Empresa{" +
                "cnpj='" + cnpj + '\'' +
                ", razaoSocial='" + razaoSocial + '\'' +
                ", funcionarios=" + funcionarios +
                '}';
    }
}
