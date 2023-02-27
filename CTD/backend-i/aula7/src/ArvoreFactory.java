import java.util.HashMap;

public class ArvoreFactory {

    //HASH MAP
    private static final HashMap<String, Arvore> flyweightArvore = new HashMap<>();


    //FACTORY METHOD
    public Arvore getArvore(String cor) {
        if (!flyweightArvore.containsKey(cor)) {
            if (cor.equalsIgnoreCase("verde")) {
                flyweightArvore.put(cor, new Arvore("Ornamental", 200, 400, cor));
                System.out.println("--Nova Instância--");
            } else if (cor.equalsIgnoreCase("vermelho")) {
                flyweightArvore.put(cor, new Arvore("Frutifera", 500, 300, cor));
                System.out.println("--Nova Instância--");
            } else {
                flyweightArvore.put(cor, new Arvore("Florifera", 500, 300, cor));
                System.out.println("--Nova Instância--");
            }
                return flyweightArvore.get(cor);
        }
        return flyweightArvore.get(cor);
    }

    public void getArvoresEmLote (int qntVerde, int qntVerm, int qntAzul) {

        //VERDE
        for (int i = 1; i <= qntVerde; i++) {
            System.out.println(getArvore("Verde"));
        }

        //VERMELHO
        for (int i = 1; i <= qntVerm; i++) {
            System.out.println(getArvore("Vermelho"));
        }

        //AZUL
        for (int i = 1; i <= qntAzul; i++) {
            System.out.println(getArvore("Azul"));
        }

    }

}
