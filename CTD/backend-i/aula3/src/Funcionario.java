import java.time.LocalDate;
import java.util.ArrayList;

public class Funcionario extends Vendedor {
    //ATRIBUTOS
    private ArrayList<Afiliado> afiliados;
    private LocalDate dataAdmissao;

    //CONSTRUTOR
    public Funcionario(String nome, LocalDate dataAdmissao) {
        super(nome);
        this.afiliados = new ArrayList<>();
        this.dataAdmissao = dataAdmissao;
    }

    //METODOS
    @Override
    public int calcularPontos() {
        int pVendas = (super.getQtdVendas() * 5);
        int pAfiliados = afiliados.toArray().length * 10;
        int pAntiguidade = (LocalDate.now().getYear()- dataAdmissao.getYear()) * 5;

        return pVendas + pAfiliados + pAntiguidade;
    }

    public void obterAfiliado(Afiliado a) {
        this.afiliados.add(a);
        System.out.println("Afiliado " + a.getNome() + " vinculado ao funcionário " + getNome());
    }

}
