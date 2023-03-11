package model;

import service.FiguraFactory;

public class Quadrado {
    private String cor;

    private int tamanho;

    private static int contador;
    public Quadrado(int tamanho) {
        super();
        this.tamanho = tamanho;
        this.contador++;
        System.out.println("Criando uma nova instancia Quadrado: " + contador);
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getTamanho() {
        return tamanho;
    }

    public void setTamanho(int tamanho) {
        this.tamanho = tamanho;
    }
}
