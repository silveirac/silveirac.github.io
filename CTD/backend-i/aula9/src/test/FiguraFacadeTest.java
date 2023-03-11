package test;

import model.Quadrado;
import model.Triangulo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import service.FiguraFacade;
import service.FiguraFactory;

public class FiguraFacadeTest {

    @Test
    @DisplayName("Facade Test")
    void getFigura() {
        Quadrado q = (Quadrado) FiguraFacade.obterFigura("Quadrado", "Vermelho", 2);
        Quadrado q2 = (Quadrado) FiguraFacade.obterFigura("Quadrado", "Azul", 2);
        Quadrado q3 = (Quadrado) FiguraFacade.obterFigura("Quadrado", "Verde", 2);
        Quadrado q4 = (Quadrado) FiguraFacade.obterFigura("Quadrado", "Amarelo", 2);
        Assertions.assertEquals(FiguraFactory.quadradoHashMap.size(),1);

        Triangulo t = (Triangulo) FiguraFacade.obterFigura("Triangulo", "Vermelho", 2);
        Triangulo t1 = (Triangulo) FiguraFacade.obterFigura("Triangulo", "Azul", 2);
        Triangulo t2 = (Triangulo) FiguraFacade.obterFigura("Triangulo", "Verde", 2);
        Triangulo t3 = (Triangulo) FiguraFacade.obterFigura("Triangulo", "Amarelo", 2);
        Assertions.assertEquals(FiguraFactory.trianguloHashMap.size(),4);
    }
}
