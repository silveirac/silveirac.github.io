package mesa;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class FiguraTest {

    Quadrado q1, q2, q3, q4, q5;
    Circulo c1, c2, c3, c4, c5;

    @BeforeEach
    void executarAntesDeTodosOsTestes () {
        q1 = new Quadrado(1);
        q2 = new Quadrado(2);
        q3 = new Quadrado(3);
        q4 = new Quadrado(4);
        q5 = new Quadrado(5);

        c1 = new Circulo(1);
        c2 = new Circulo(2);
        c3 = new Circulo(3);
        c4 = new Circulo(4);
        c5 = new Circulo(5);

    }


    @Test
    void deveVerificarPerimetroCircunferencia () {
        Double valorC1 = c1.calcularPerimetro();
        Double valorC2 = c2.calcularPerimetro();
        Double valorC3 = c3.calcularPerimetro();
        Double valorC4 = c4.calcularPerimetro();
        Double valorC5 = c5.calcularPerimetro();

        assert valorC1.equals(6.283185307179586);
        assert valorC3.equals(18.84955592153876);


}

    @Test
    void deveVerificarPerimetroQuadrado () {
        Double valorQ1 = q1.calcularPerimetro();
        Double valorQ2 = q2.calcularPerimetro();
        Double valorQ3 = q3.calcularPerimetro();
        Double valorQ4 = q4.calcularPerimetro();
        Double valorQ5 = q5.calcularPerimetro();

    }


}
