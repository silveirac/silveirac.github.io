import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.time.LocalDate;

public class VendedorTest {


        Afiliado a;
        Funcionario f;
        Estagiario e;

        @BeforeEach
        void executarAntesDeCadaTeste () {
                a = new Afiliado("Cairo");
                a.vender();
                a.vender();
                a.vender();
                a.vender();
                a.vender();

                f = new Funcionario("Regina", LocalDate.of(2020, 10, 25));
                f.vender();
                f.vender();
                f.obterAfiliado(a);

                e  = new Estagiario("Matheus");
                e.vender();
                e.vender();
                e.vender();
        }

        @Test
        void verificarCategoria () {
                String cat1 = a.mostrarCategoria();
                String cat2 = f.mostrarCategoria();
                String cat3 = e.mostrarCategoria();

                assert cat1.equals("mestre");
                assert cat2.equals("bom");
                assert cat3.equals("estagiário novato");
        }


}
