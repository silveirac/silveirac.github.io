package test;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import service.BuscaFacade;

import java.time.LocalDate;

public class BuscaFacadeTest {

    //INSTANCIANDO A FACADE
    BuscaFacade facade = new BuscaFacade();

    @BeforeEach
    void disponibilidades() {
        //ADICIONANDO NOVAS DISPONIBILIDADES DE VOO E HOSPEDAGEM
        facade.v.addDisponibilidadeVoo("Latam", LocalDate.of(2023, 1, 1), LocalDate.of(2024, 12, 31), "São Paulo", "Paris");
        facade.h.addDisponibilidadeHotel("Hilton", LocalDate.of(2023, 1, 1), LocalDate.of(2024, 12, 31), "Paris");
    }

    @Test
    @DisplayName("Datas disponíveis")
    void verificaVoosEmDatasDisponíveis () {

        //VERIFICANDO SE OR RETORNO É NULL
        Assertions.assertEquals(facade.busca("Paris", LocalDate.of(2023, 4, 22), LocalDate.of(2023, 4, 29)), null);
    }

    @Test
    @DisplayName("Datas indisponíveis")
    void verificaVoosEmDatasNãoDisponíveis () {

        //VERIFICANDO SE OR RETORNO É NULL
        Assertions.assertEquals(facade.busca("Paris", LocalDate.of(2025, 4, 22), LocalDate.of(2025, 4, 29)), null);
    }

}
