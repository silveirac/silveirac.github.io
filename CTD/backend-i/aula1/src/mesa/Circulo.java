package mesa;

public class Circulo extends Figura {

    //ATRIBUTOS
    private int raio;

    public Circulo(int raio) {
        super();
        this.raio = raio;
    }

    @Override
    public double calcularPerimetro() {
        double p = Math.PI * (raio * 2);
        System.out.println("Perímetro da Circunferência: " + (p));
        return p;
    }
}
