import com.dh.model.ListaMedia;
import org.apache.log4j.Logger;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        Logger logger = Logger.getLogger(Main.class);

        //LISTAS PARA TESTES
        ListaMedia lista1 = new ListaMedia(Arrays.asList(1,2,3,4)); //LISTA < 5
        ListaMedia lista2 = new ListaMedia(Arrays.asList(1,2,3,4,5,6)); //LISTA > 5 E < 10
        ListaMedia lista3 = new ListaMedia(Arrays.asList(1,2,3,4,5,6,7,8,9,10,11)); //LISTA > 10
        ListaMedia lista4 = new ListaMedia(Arrays.asList()); //LISTA VAZIA

        //IMPRIMINDO LISTAS
        System.out.println(lista1);
        System.out.println(lista2);
        System.out.println(lista3);
        System.out.println(lista4);

        //TESTANDO A VERIFICAÇÃO DAS LISTAS (DEVE RETORNAR EM LOG)
        lista1.verificaLista();
        lista2.verificaLista();
        lista3.verificaLista();
        lista4.verificaLista();
    }
}