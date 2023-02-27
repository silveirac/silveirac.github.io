public class Infantil extends Cardapio {

    //CONSTRUTOR
    public Infantil(Double adicional) {
        super(adicional);
    }

    //METODOS
    @Override
    public void montar() {
        super.montar();
        System.out.println("-- Prato Infantil: Adicionar Presente Surpresa --");
    }

    @Override
    public Double calcularPrecoVenda() {
        return (super.calcularPrecoVenda() + super.getAdicional() + 10D);
    }
}
