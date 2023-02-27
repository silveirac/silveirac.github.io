public class Veggie extends Cardapio {

    //CONSTRUTOR
    public Veggie(Double adicional) {
        super(adicional);
    }

    //METODOS
    @Override
    public void montar() {
        super.montar();
        System.out.println("-- Prato Veggie: Utilizar embalagem especial --");
    }

    @Override
    public Double calcularPrecoVenda() {
        return ((super.calcularPrecoVenda() + super.getAdicional()) * 1.01D);
    }
}
