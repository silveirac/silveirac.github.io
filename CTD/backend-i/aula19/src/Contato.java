public class Contato {
    //ATRIBUTOS
    private String nome;
    private String email;
    private String telefone;

    //CONSTRUTORES
    public Contato(String nome, String email, String telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    public Contato() {
    }

    //GETTERS & SETTERS
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    //METODOS
    @Override
    public String toString() {
        return nome +
                "\n  Email: " + email +
                "\n  Tel.: " + telefone;
    }

    public String toSeparatedString() {
        return String.format("%s;%s;%s", nome, email, telefone);
    }
}
