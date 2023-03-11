import com.model.Empresa;
import com.model.Funcionario;

import java.io.*;

public class Main {

    //INSTANCIANDO EMPRESA
    static Empresa e = new Empresa("26.226.155/0001-34", "Digital House Educação S.A.");

    //INSTANCIANDO COLABORADORES
    static Funcionario f1 = new Funcionario("Cauê", "Silveira", "055.424.058-12");
    static Funcionario f2 = new Funcionario("Everton", "Alves", "042.587.338-46");
    static Funcionario f3 = new Funcionario("Gustavo", "Moraes", "456.670.018-38");
    static Funcionario f4 = new Funcionario("Jorge", "Almeida", "419.802.357-63");


    public static void main(String[] args) throws IOException, ClassNotFoundException {

        //ADICIONANDO OS FUNCIONÁRIOS À EMPRESA
        e.addFuncionario(f1);
        e.addFuncionario(f2);
        e.addFuncionario(f3);
        e.addFuncionario(f4);

        //GRAVA DADOS DA EMPRESA EM ARQUIVO DE TEXTO
        FileOutputStream fos = new FileOutputStream("empresa.txt");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(e);
        fos.flush();
        fos.close();
        oos.flush();
        oos.close();

        //LÊ DADOS DE ARQUIVO E SALVA EM UMA NOVA EMPRESA
        Empresa e2;

        FileInputStream fis = new FileInputStream("empresa.txt");
        ObjectInputStream ois = new ObjectInputStream(fis);

        e2 = (Empresa) ois.readObject();
        System.out.println(e.toString());

        fis.close();
        ois.close();

        //GRAVANDO FUNCIONARIOS EM UM ARQUIVO EMPREGADOS.TXT
        FileOutputStream fos2 = new FileOutputStream("empregados.txt");
        OutputStreamWriter osw = new OutputStreamWriter(fos2);
        BufferedWriter bw = new BufferedWriter(osw);

        for (Funcionario f : e2.getFuncionarios()) {
            String funcionarioInfo = f.getNome() + ";" + f.getSobrenome() + ";" + f.getCpf();
            System.out.println(funcionarioInfo);
            bw.write(funcionarioInfo);
            bw.newLine();
        }

        bw.flush();
        bw.close();

    }
}