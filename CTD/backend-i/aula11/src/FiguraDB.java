public class FiguraDB {
    //ATRIBUTOS
    private int id;
    private String tipo;
    private String cor;

    //CONSTRUTOR
    public FiguraDB(int id, String tipo, String cor) {
        this.id = id;
        this.tipo = tipo;
        this.cor = cor;
    }

    //GETTERS & SETTERS
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    //TO STRING

    @Override
    public String toString() {
        return "id: " + id +
                ", tipo: '" + tipo + '\'' +
                ", cor: '" + cor + '\'';
    }
}
