public abstract class Cardapio {

    //ATRIBUTOS
    private Double precoBase = 50.0;
    private Double adicional;

    //CONSTRUTOR
    public Cardapio(Double adicional) {
        this.adicional = adicional;
    }

    //GETTERS & SETTERS
    public Double getPrecoBase() {
        return precoBase;
    }

    public void setPrecoBase(Double precoBase) {
        this.precoBase = precoBase;
    }

    public Double getAdicional() {
        return adicional;
    }

    public void setAdicional(Double adicional) {
        this.adicional = adicional;
    }

    //METODOS
    public void montar() {
        System.out.println("Montagem de prato.");
    }

    public Double calcularPrecoVenda() {
        return precoBase;
    }
}
