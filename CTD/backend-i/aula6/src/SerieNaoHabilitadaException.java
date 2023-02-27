public class SerieNaoHabilitadaException extends Exception {

    //CONSTRUCTOR
    protected SerieNaoHabilitadaException() {
        super("Excede o número de reproduções permitida");
    }
}
