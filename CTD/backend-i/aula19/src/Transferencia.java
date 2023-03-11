import java.io.*;

public class Transferencia {

    public Transferencia() {
    }

    public void transferir(String fileNameIn, String fileNameOut) throws IOException {

        //FLUXO DE ENTRADA
        FileInputStream fis = new FileInputStream(fileNameIn);
        InputStreamReader isr = new InputStreamReader(fis);
        BufferedReader br = new BufferedReader(isr);

        String text = br.readLine();
        Contato c = new Contato();

        //FLUXO DE SAÍDA
        FileOutputStream fos = new FileOutputStream(fileNameOut);
        OutputStreamWriter osw = new OutputStreamWriter(fos);
        BufferedWriter bw = new BufferedWriter(osw);

        while (text != null) {

            if(fileNameIn == fileNameOut) {
                System.out.println("Os arquivos possuem o mesmo nome, escolha arquivos ou nomes diferentes.");

            } else {
            System.out.println(text);
            bw.write(text);
            bw.newLine();
            text = br.readLine();

            }
        }

        bw.close();
        br.close();

    }

}
