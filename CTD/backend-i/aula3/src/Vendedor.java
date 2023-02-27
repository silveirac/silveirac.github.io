public abstract class Vendedor {

    //ATRIBUTOS
    private String nome;
    private int qtdVendas;

    //CONSTRUTORES
    public Vendedor(String nome) {
        this.nome = nome;
        this.qtdVendas = 0;
    }

    //GETTERS & SETTERS
    public int getQtdVendas() {
        return qtdVendas;
    }

    public void setQtdVendas(int qtdVendas) {
        this.qtdVendas = qtdVendas;
    }

    public String getNome() {
        return nome;
    }

    //METODOS
    public void vender() {
     this.setQtdVendas(getQtdVendas() + 1);
    }

    public String mostrarCategoria() {
        if (this.calcularPontos() < 20) {
            return "novato";
        } else if (this.calcularPontos() >= 20 && this.calcularPontos() <=30) {
            return "aprendiz";
        } else if (this.calcularPontos() >= 31 && this.calcularPontos() <=40) {
            return "bom";
        } else {
            return "mestre";
        }

    }

    public abstract int calcularPontos();

}
