package mesa;

public class Quadrado extends Figura {

    //ATRIBUTOS
    private int lado;

    public Quadrado(int lado) {
        super();
        this.lado = lado;
    }

    @Override
    public double calcularPerimetro() {
        double p = lado * 4;
        System.out.println("Perímetro do Quadrado: " + (p));
        return p;
    }
}
