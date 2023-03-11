package service;

public class FiguraFacade {

    //METODOS
    public static Object obterFigura(String figura, String cor, int tamanho) {
        if (figura.equalsIgnoreCase("quadrado")) {
            return FiguraFactory.obterQuadrado(tamanho);
        } else if (figura.equalsIgnoreCase("triangulo")) {
            return FiguraFactory.obterTriangulo(cor);
        }
        return null;
    }


}
