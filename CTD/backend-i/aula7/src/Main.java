public class Main {
    public static void main(String[] args) {

        //TESTE DE PLANTAÇÃO DE 1.000.000 DE ÁRVORES
        ArvoreFactory factory = new ArvoreFactory();
        factory.getArvoresEmLote(500000, 500000, 0);

        //VERIFICANDO A QUANTIDADE DE MEMÓRIA UTILIZADA
        Runtime runtime = Runtime.getRuntime();
        System.out.println("Memória utilizada: " + (runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024));
    }
}