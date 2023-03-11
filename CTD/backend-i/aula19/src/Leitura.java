import java.io.*;

public class Leitura {

    //CONSTRUTOR
    public Leitura() {
    }


    public void ler(String fileName) throws IOException {
        //FLUXO DE ENTRADA
        FileInputStream fis = new FileInputStream(fileName);
        InputStreamReader isr = new InputStreamReader(fis);
        BufferedReader br = new BufferedReader(isr);

        String text = br.readLine();
        Contato c = new Contato();


        while (text != null) {
            String[] stringArray = text.split(";");

            c.setNome(stringArray[0]);
            c.setEmail(stringArray[1]);
            c.setTelefone(stringArray[2]);

            System.out.println(c.toString());
            text = br.readLine();
        }

        br.close();

    }
}
