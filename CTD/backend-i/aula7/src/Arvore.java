public class Arvore {

    // ATRIBUTOS
    private String tipo;
    private int altura;
    private int largura;
    private String cor;

    // CONSTRUTORES
    public Arvore(String tipo, int altura, int largura, String cor) {
        this.tipo = tipo;
        this.altura = altura;
        this.largura = largura;
        this.cor = cor;
    }

    // GETTERS & SETTERS
    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getAltura() {
        return altura;
    }

    public void setAltura(int altura) {
        this.altura = altura;
    }

    public int getLargura() {
        return largura;
    }

    public void setLargura(int largura) {
        this.largura = largura;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    //TO STRING
    @Override
    public String toString() {
        return "Plantada uma árvore " + tipo + " de " + altura + "m de altura e " + largura + "m de largura na cor " + cor;
    }
}
