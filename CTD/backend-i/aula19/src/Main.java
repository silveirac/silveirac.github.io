import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {

    //INSTANCIANDO CONTATOS
    static  final Contato c1 = new Contato("Cauê Silveira", "caue.silveira@digitalhouse.com", "(11)4501-5501");
    static  final Contato c2 = new Contato("Everton Alves", "everton.alves@digitalhouse.com", "(11)4501-5502");
    static  final Contato c3 = new Contato("Guilherme Moreira", "guilherme.moreira@digitalhouse.com", "(11)4501-5503");
    static  final Contato c4 = new Contato("Gustavo Moraes", "gustavo.moraes@digitalhouse.com", "(11)4501-5504");
    static  final Contato c5 = new Contato("Jorge Almeida", "jorge.almeida@digitalhouse.com", "(11)4501-5505");

    //CRIANDO ARRAY FIXO COM CONTATOS
    static ArrayList<Contato> contatos = new ArrayList<Contato>(Arrays.asList(c1, c2, c3, c4, c5));

    public static void main(String[] args) throws IOException {

        Escrita escrita = new Escrita();
        escrita.gravar("contatos.txt", contatos);

        Transferencia transferencia = new Transferencia();
        transferencia.transferir("contatos.txt", "newContatos.txt");

        Leitura leitura = new Leitura();
        leitura.ler("newContatos.txt");
    }


}