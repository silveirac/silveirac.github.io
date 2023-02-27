public class ProxySerie implements ISerie {
    //ATRIBUTOS
    private int qtdViews;

    //CONSTRUTOR
    public ProxySerie() {
        this.qtdViews = 0;
    }

    //METODOS
    @Override
    public void getSerie(String nomeSerie) throws SerieNaoHabilitadaException {
        if (qtdViews < 5) {
            ISerie serie = new Serie(nomeSerie);
            serie.getSerie(nomeSerie);
            this.qtdViews++;
        } else {
            throw new SerieNaoHabilitadaException();
        }
    }

}
