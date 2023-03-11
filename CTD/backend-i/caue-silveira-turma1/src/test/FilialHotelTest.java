package test;

import com.dao.impl.EnderecoDao;
import com.dao.impl.FilialHotelDao;
import com.model.Endereco;
import com.model.FilialHotel;
import com.service.EnderecoService;
import com.service.FilialHotelService;
import org.apache.log4j.Logger;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;

public class FilialHotelTest {
    //LOGGER
    private static final Logger logger = Logger.getLogger(FilialHotel.class);

    //INSTANCIANDO SERVICOS
    EnderecoService es = new EnderecoService(new EnderecoDao());
    FilialHotelService fs = new FilialHotelService(new FilialHotelDao());

    //CRIANDO CASOS DE TESTE (ENDERECOS E FILIAIS)

        //ENDERECOS
        Endereco e1 = new Endereco("Av. Brasil", "500", "Rio de Janeiro", "RJ");
        Endereco e2 = new Endereco("Av. Galileu Bicudo", "1127", "Itu", "SP");
        Endereco e3 = new Endereco("Rua Quatorze Biz", "150B", "São Paulo", "SP");
        Endereco e4 = new Endereco("Rua Coronel Quirino", "352", "Campinas", "SP");
        Endereco e5 = new Endereco("Benjamin Frankin Street", "440", "Orlando", "FL(EUA)");

        //FILIAIS
        FilialHotel f1 = new FilialHotel("Hotel Digital Copacabana", true, e1);
        FilialHotel f2 = new FilialHotel("Hotel Digital República", false, e2);
        FilialHotel f3 = new FilialHotel("Hotel Digital São Paulo", false, e3);
        FilialHotel f4 = new FilialHotel("Hotel Digital Campinas", false, e4);
        FilialHotel f5 = new FilialHotel("Hotel Digital International Resort", true, e5);

    @Test
    @DisplayName("Teste de criação de enderecos")
    void testarCriacaoDeEnderecos() throws SQLException {
        ArrayList<Endereco> enderecoList = new ArrayList<>(Arrays.asList(e1, e2, e3, e4, e5));
        for (Endereco end : enderecoList ) {
            es.salvar(end);
            Assertions.assertNotNull(end);
        }
    }

    @Test
    @DisplayName("Teste de criação de filiais")
    void testarCriacaoDeFiliais() throws SQLException {
        ArrayList<FilialHotel> filialList = new ArrayList<>(Arrays.asList(f1, f2, f3, f4, f5));
        for (FilialHotel filial : filialList ) {
            fs.salvar(filial);
            Assertions.assertNotNull(filial);
        }
    }

}
