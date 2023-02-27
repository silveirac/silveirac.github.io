
public class Serie implements ISerie {

    //ATRIBUTOS
    private String nomeSerie;

    //CONSTRUTOR
    public Serie(String nomeSerie) {
        this.nomeSerie = nomeSerie;
    }

    //METODOS
    @Override
    public void getSerie(String nomeSerie) {
        System.out.println("www." + this.nomeSerie  + ".com");
    }

}
