public class Afiliado extends Vendedor {


    //CONSTRUTOR
    public Afiliado(String nome) {
        super(nome);
    }

    //METODOS
    @Override
    public int calcularPontos() {
        return super.getQtdVendas() * 15;
    }
}
