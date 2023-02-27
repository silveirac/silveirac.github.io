public class Estagiario extends Vendedor {

    //Construtor
    public Estagiario(String nome) {
        super(nome);
    }

    //Metodos
    @Override
    public int calcularPontos() {
        return (getQtdVendas() * 5);
    }

    @Override
    public String mostrarCategoria() {
        if (calcularPontos() < 50) {
            return "estagiário novato";
        } else {
            return "estagiário experiênte";
        }
    }
}
