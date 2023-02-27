public class Main {
    public static void main(String[] args) {
        Adulto a = new Adulto();
        a.montar();
        System.out.println(a.calcularPrecoVenda());

        Infantil i = new Infantil(15D);
        i.montar();
        System.out.println(i.calcularPrecoVenda());

        Veggie v = new Veggie(10D);
        v.montar();
        System.out.println(v.calcularPrecoVenda());
    }
}