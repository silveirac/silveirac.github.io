import java.io.*;
import java.util.ArrayList;


public class Escrita {

    //CONSTRUTOR
    public Escrita() {
    }


    public void gravar(String fileName, ArrayList<Contato> contatos) throws IOException {

        //FLUXO DE SAÍDA
        FileOutputStream fos = new FileOutputStream(fileName);
        OutputStreamWriter osw = new OutputStreamWriter(fos);
        BufferedWriter bw = new BufferedWriter(osw);

        for(Contato c : contatos) {
            bw.write(c.toSeparatedString());
            bw.newLine();

        }

        bw.close();
    }


}
