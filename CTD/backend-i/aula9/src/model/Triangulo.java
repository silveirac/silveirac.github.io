package model;

public class Triangulo {

    private String cor;

    private int tamanho;

    private static int contador;

    public Triangulo(String cor) {
        this.cor = cor;
        this.contador++;
        System.out.println("Criando uma nova instancia de Triangulo: " + contador);
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
