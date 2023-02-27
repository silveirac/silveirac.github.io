public class Main {
    public static void main(String[] args) throws SerieNaoHabilitadaException {

        ISerie proxy = new ProxySerie();

        try {
        proxy.getSerie("House of the Dragon");
        proxy.getSerie("CSI");
        proxy.getSerie("The Walking Dead");
        proxy.getSerie("Supernatural");
        proxy.getSerie("The Last of Us");
        proxy.getSerie("Alice in Wonderlands");

        } catch (SerieNaoHabilitadaException err) {
            System.out.println(err);
        }
    }
}