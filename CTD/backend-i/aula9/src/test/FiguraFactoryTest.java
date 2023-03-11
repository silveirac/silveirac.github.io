package test;

import model.Triangulo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import service.FiguraFactory;

public class FiguraFactoryTest {

    @Test
    void getTriangulo() {
        Triangulo triangulo = FiguraFactory.obterTriangulo("vermelho");
        triangulo.setTamanho(2);

        Triangulo triangulo1 = FiguraFactory.obterTriangulo("vermelho");
        triangulo1.setTamanho(1);

        Assertions.assertEquals(triangulo.getCor(), "vermelho");
        Assertions.assertEquals(triangulo1.getTamanho(), 1);
        Assertions.assertEquals(FiguraFactory.trianguloHashMap.size() == 1, true);
    }
}


